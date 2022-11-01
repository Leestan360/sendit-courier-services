
# SendIT Courier Services

This is a courier services app that is used to Providing a secure and safe way to deliver parcels.Making Deliveries to Remote Areas and providing Services at affordable Prices.





## Acknowledgements

 - [Dribbble inspirational designs](https://dribbble.com/tags/parcels)
 - [Rails API resourses websites](https://www.section.io/engineering-education/how-to-integrate-a-react-application-with-rails-api/)
 - [How to structure a courier services application](https://www.peerbits.com/blog/guide-to-build-on-demand-courier-delivery-application.html)


## API Reference

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.


## Appendix

The application is meant to be an inspiration to many developers willing to come up with a working application from scratch using react and rails technologies


## Authors

- [@Leestan360](https://github.com/Leestan360)
  [@auma2022](https://github.com/auma2022)
  [@rahimedu](https://github.com/rahimedu)
  [@anthonykimani](https://github.com/anthonykimani)
  [@koechronix](https://github.com/koechronix)
  [@mmulahvictor](https://github.com/mmulahvictor) 

## Badges

Add badges from somewhere like: [shields.io](https://shields.io/)

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)

## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Balloon Blue | ![#2B60DE](https://via.placeholder.com/10/2B60DE?text=+) #2B60DE |
| Lapis Blue | ![#15317E](https://via.placeholder.com/10/15317E?text=+) #15317E |
| Water | ![#EBF4FA](https://via.placeholder.com/10/EBF4FA?text=+) #EBF4FA |
| Iceburg | ![#56A5EC](https://via.placeholder.com/10/56A5EC?text=+) #56A5EC |


## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.


## Demo

Insert gif or link to demo


## Deployment

This is the deployed link of the app feel free to view and please leave us a reveiw from your experience using the app.
https://sendit-courier-app.herokuapp.com/
## Design

[Figma Design](https://www.figma.com/file/7za7S9u1A3yqTZ5yiwc7IE/Team-SendIT?node-id=0%3A1)


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`API_KEY`

`ANOTHER_API_KEY`


## FAQ

#### How will send it solve the current problem?

The current problem being insecurities send it will be able to provide a secure and safe way to deliver parcels 


#### What will help send it cover a wide population?

Making Deliveries to Remote Areas
Providing Services at affordable Prices



## Features

- Users can create an account and log in
- Users can create a parcel delivery order
- Users can change the destination of a parcel delivery order
- Users can cancel a parcel delivery order
- Users can see the details of a delivery order
- Admin can change the status and present location of a parcel delivery order



## Feedback

If you have any feedback, please reach out to us at sendit@gmail.com


## Installation

Install send it with npm
example after cloning navigate into the folder

```bash
  cd sendit_app
  npm install --prefix client
  
```
Don't forget to run the server and start application
```bash
  bundle install
  rails server
  npm start --prefix client
```
    
## Lessons Learned

We learned a lot while comming up with this app from the new technologies used which include: 
- React - React was used to create the frontend
- Figma - Was used to Design the UI
- Redux - Redux and Redux toolkit was used to handle State management
- Rails 7 - Was used as Our Backend Framework
- Postgresql - Was used as our Database
- Jest and Ministests - Used to test the application

To learning github colaborations and task allocation through trello. We have encountered a lot of challenges but through resilience and understanding among us we manged to fix our conflicts in a proper way.



 

  



## License

[MIT](https://choosealicense.com/licenses/mit/)


![Logo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/th5xamgrr6se0x5ro4g6.png)


## Optimizations
 refactors, performance improvements, accessibility


## Related

Here are some related projects

[sample delivery apps](https://www.fiverr.com/gigs/courier-app)


## Run Locally

Clone the project

```bash
  git clone https://github.com/Leestan360/sendit-courier-services.git
```

Go to the project directory

```bash
  cd sendit-courier-services
```

Install dependencies

```bash
  npm install --prefix client
  bundle install
```

Start the server

```bash
  npm start --prefix client
  rails s
```


## Screenshots

![App Screenshot](https://sendit-courier-app.herokuapp.com/)


## Support

For support, email sendit@gmail.com or join our Slack channel.


## Tech Stack

**Client:** React, Redux, TailwindCSS

**Server:** rails, ruby


## Used By

This project is used by the following companies:

- Company 1
- Company 2


## Running Tests

To run tests, run the following command

```bash
  npm run test
```


## Usage/Examples

```javascript
import Component from 'my-project'

function App() {
  return <Component />
}
```

