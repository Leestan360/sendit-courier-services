import React from 'react'

const posts = [
        {
            title: "Pick Delivery 1",
            img: "https://media.istockphoto.com/photos/cargo-box-on-white-background-isolated-3d-illustration-picture-id920497380?b=1&k=20&m=920497380&s=170667a&w=0&h=YyHRrLBvlFqtiHuvXHOft7wmIrPNi3mucXr4hRf3MQw=",
            content: "Your Delivery has been dispatched click the button bellow to monitor the progress of your delivery"
        },
        {
            title: "Pick Delivery 2",
            img: "https://media.istockphoto.com/photos/woman-customer-opening-cardboard-box-parcel-picture-id1331289628?b=1&k=20&m=1331289628&s=170667a&w=0&h=lTGWzLOXSxESlFgeuv7wkTQCT5I9nf4FjywpSY5fmT4=",
            content: "Your Delivery has been dispatched click the button bellow to monitor the progress of your delivery"
        },
        {
            title: "Pick Delivery 3",
            img: "https://media.istockphoto.com/photos/yay-ive-been-counting-the-hours-picture-id612008590?b=1&k=20&m=612008590&s=170667a&w=0&h=bHIRJqK-FYaBSu-Sm1I2gcazhBwH-iRuwH9TdpEU8oM=",
            content: "Your Delivery has been dispatched click the button bellow to monitor the progress of your delivery"
        },
        {
            title: "Pick Delivery 4",
            img: "https://media.istockphoto.com/photos/happy-african-american-woman-receiving-box-from-courier-at-home-picture-id1326431774?b=1&k=20&m=1326431774&s=170667a&w=0&h=eL37CFsCET5Ffo7mC5mXA4x7LNQgmHzyNz0qI4w7Uaw=",
            content: "Your Delivery has been dispatched click the button bellow to monitor the progress of your delivery"
        },
        {
            title: "Pick Delivery 5",
            img: "https://media.istockphoto.com/photos/overjoyed-black-lady-holding-cardboard-parcel-receiving-desired-her-picture-id1342064730?b=1&k=20&m=1342064730&s=170667a&w=0&h=RC_pkK_jdlRuiK4dYjHola4Uo6ciD3-ABzEtQwSeSpI=",
            content: "Your Delivery has been dispatched click the button bellow to monitor the progress of your delivery"
        },
        {
            title: "Pick Delivery 6",
            img: "https://media.istockphoto.com/photos/smiling-african-man-customer-opening-cardboard-box-parcel-on-sofa-picture-id1203044198?b=1&k=20&m=1203044198&s=170667a&w=0&h=SeNzyIOltkbUFzvtb5MbKJEvYNC5mRbyJsZNwdGI05s=",
            content: "Your Delivery has been dispatched click the button bellow to monitor the progress of your delivery"
        },
        {
            title: "Pick Delivery 7",
            img: "https://media.istockphoto.com/photos/female-courier-delivering-packages-to-adult-woman-picture-id1346342072?b=1&k=20&m=1346342072&s=170667a&w=0&h=1Q9G3RTB3JZPg63WMbUiqbWNyw8xYWeq6R7DeJdUMe4=",
            content: "Your Delivery has been dispatched click the button bellow to monitor the progress of your delivery"
        },
        {
            title: "Pick Delivery 8",
            img: "https://media.istockphoto.com/photos/excited-african-young-woman-shopper-opening-parcel-box-at-home-happy-picture-id1220134157?b=1&k=20&m=1220134157&s=170667a&w=0&h=0fuZC1P__-f_WJ4CGB6fw0xb2DbMLeWpUfsXBDrYcIE=",
            content: "Your Delivery has been dispatched click the button bellow to monitor the progress of your delivery"
        },
    ];


function Deliveries() {
  return (
    <div className="grid gap-2 lg:grid-cols-4">
                {posts.map((items, key) => (
                    <div className="w-full rounded-lg shadow-md lg:max-w-sm bg-slate-300" key={key}>
                        <img
                            className="object-cover w-full h-48"
                            src={items.img}
                            alt="image" />
                        
                        <div className="p-4">
                            <h4 className="text-xl font-semibold text-blue-800">
                                
                                {items.title}
                            </h4>
                            <p className="mb-2 leading-normal">
                            {items.content}
                            </p>
                            <button className="px-4 py-2 text-sm text-blue-100 bg-blue-800 rounded shadow">
                                View Delivery
                            </button>
                        </div>
                    </div>
                    ))}
            </div>
  )
}

export default Deliveries