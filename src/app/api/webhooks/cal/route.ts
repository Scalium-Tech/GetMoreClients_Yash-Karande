import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// We initialize a server-side Supabase client with the service role key to ensure we can insert data
const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { payload, triggerEvent } = body;

        // We only care about successful bookings
        if (triggerEvent !== 'BOOKING_CREATED') {
            return NextResponse.json({ message: 'Event ignored' }, { status: 200 });
        }

        const attendee = payload.attendees[0];
        const responses = payload.responses;

        // Map Cal.com custom responses to our Supabase columns
        // The keys here depend on the "Identifier" used in Cal.com booking questions
        const bookingData = {
            first_name: attendee.name.split(' ')[0],
            last_name: attendee.name.split(' ').slice(1).join(' '),
            email: attendee.email,
            phone: attendee.phoneNumber || null,

            // Custom Questions (mapping identifiers to columns)
            website_url: responses.website?.value || null,
            company_size: responses.companySize?.value || null,
            service_interested: responses.service?.value || null,
            business_nature: responses.businessNature?.value || null,
            marketing_challenge: responses.marketingChallenge?.value || null,
            growth_goal: responses.growthGoal?.value || null,

            // Metadata
            booking_time: payload.startTime,
            cal_booking_id: payload.bookingId,
            event_type_id: payload.eventTypeId,
            status: 'scheduled'
        };

        const { error } = await supabaseAdmin
            .from('bookings')
            .insert([bookingData]);

        if (error) {
            console.error('Supabase Insert Error:', error);
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json({ success: true }, { status: 200 });

    } catch (error: any) {
        console.error('Webhook processing failed:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
