puts "Seeding Data"

Parcel.create([
    {
        user_id: 1,
        weight: 5,
        pickup_location: "Nairobi",
        perishable: true,
        fragility: true,
        expected_time: "",
        delivery_location: "Westlands",
        category_type: "electronic"
    },
    {
        user_id: 2,
        weight: 10,
        pickup_location: "Nairobi",
        perishable: true,
        fragility: false,
        expected_time: "",
        delivery_location: "Nakuru",
        category_type: "clothing"
    }
])

Payment.create([
    {
        user_id:1,
        card_number:200,
        card_name: "kcb",
        expiration_date:12,
        security_code:340
    },
    {
        user_id:2,
        card_number:140,
        card_name: "airtel money",
        expiration_date:10,
        security_code:300
    }
    
])

AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password') if Rails.env.development?
