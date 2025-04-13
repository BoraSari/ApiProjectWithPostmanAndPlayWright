import {expect, test} from "@playwright/test"
import testDatasForCreatingBooking from "../node_modules/TestDatas/testDatasForCreatingBooking.json"
import testDatasForCreatingToken from "../node_modules/TestDatas/testDatasForCreatingToken.json"


test("Create a token",(async ({page})=>{
  //Post request
  const tokenRequest = await page.request.post("https://restful-booker.herokuapp.com/auth",{
    data:
    testDatasForCreatingToken
  })

  //GettingResponse
  const response = await tokenRequest.json()

  //Response checking
  console.log(response)

  //Assertion checking
  await expect(tokenRequest.status()).toEqual(200)
  await expect( typeof response.token).toBe("string")
  await expect(response).toBeTruthy()
  const accessToken = response.token
  console.log(accessToken)
}))


test("Get All Bookings",(async ({page})=>{
  //Get Request
  const getAllBookings = await page.request.get("https://restful-booker.herokuapp.com/booking")

  //Getting response of request
  const response = await getAllBookings.json()

 // Request Checking
 console.log(response)

//Assertions
 await expect(getAllBookings.status()).toEqual(200);
 await expect(getAllBookings.body()).toBeTruthy()

 //Getting Selected id
 const dynamicId = await response[0].bookingid

 //Id checking
 console.log(dynamicId)

 //Assertion for dynamic id
 await expect(response).toContainEqual( { "bookingid": dynamicId })
}))


test("Create  A New Booking",(async ({page})=>{
  //Post Request
 const createABooking = await page.request.post("https://restful-booker.herokuapp.com/booking",{
  data: 
  testDatasForCreatingBooking
 })

//Getting All Response
const response= await createABooking.json()

//Dynamic id getting with const value
const id = await response.bookingid

//Id And Response control
console.log(response)
console.log(testDatasForCreatingBooking)


//Response Body
const responseBody = {
  bookingid: id,
  booking: {
    firstname: 'Jim',
    lastname: 'Brown',
    totalprice: 111,
    depositpaid: true,
    bookingdates: { checkin: '2018-01-01', checkout: '2019-01-01' },
    additionalneeds: 'Breakfast'
  }
}

//Assertions
await expect(responseBody.bookingid).toEqual(id)
await expect(createABooking.status()).toEqual(200)
await expect(createABooking.statusText()).toEqual("OK")
await expect(responseBody.booking.depositpaid).toBe(true)

}))

test("Update Booking Api Test",(async ({page})=>{
   //Post request for token
  const tokenRequest = await page.request.post("https://restful-booker.herokuapp.com/auth",{
    data:
    testDatasForCreatingToken
  })

  //Getting post request token response
  const response = await tokenRequest.json()
  //AccessToken save
  const accessToken = await response.token
  console.log(accessToken)

  //Create a booking request
  const createABooking = await page.request.post("https://restful-booker.herokuapp.com/booking",{
    data: 
    testDatasForCreatingBooking
   })
  
  //Getting Response of Create booking
  const responseCreateBooking = await createABooking.json()
  
  //Dynamic id getting with const value
  const id = await responseCreateBooking.bookingid
  console.log("Id of request",id)

//Update request for booking
 const updateBooking = await page.request.put(`https://restful-booker.herokuapp.com/booking/${id}`,{
  data:{
    "firstname" : "Gitae",
    "lastname" : "Brown",
    "totalprice" : 111,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Dinner"
},
  headers:{
    'Content-Type':'application/json', 
    'Accept': 'application/json',
    'Cookie': `token=${accessToken}`,
    'Authorziation': `token=${accessToken}`
   }

 })

 //Getting update request response
 const responseForUpdateBooking = await updateBooking.json()
 console.log(responseForUpdateBooking)
 //Getting selected key
 const additionalNeeds =  await responseForUpdateBooking.additionalneeds


 
 //Content-type and selected key verification
 console.log("Response body =",updateBooking.headers()["content-type"])
 console.log(additionalNeeds)

 //Assertions
 await expect(additionalNeeds).toBe("Dinner")
 await expect(updateBooking.status()).toEqual(200)
 await expect(updateBooking.statusText()).toEqual("OK")
 await expect(responseForUpdateBooking).toHaveProperty("firstname")
 await expect(updateBooking.headers()['content-type']).toContain("application/json");
 await expect(typeof additionalNeeds).toBe("string")

}))


test("Delete selected booking",(async({page})=>{
     //Post request for token
     const tokenRequest = await page.request.post("https://restful-booker.herokuapp.com/auth",{
      data:
      testDatasForCreatingToken
    })
  
    //Getting post request token response
    const response = await tokenRequest.json()
    //AccessToken save
    const accessToken = await response.token
    console.log(accessToken)
  
    //Create a booking request
    const createABooking = await page.request.post("https://restful-booker.herokuapp.com/booking",{
      data: 
      testDatasForCreatingBooking
     })
    
    //Getting Response of Create booking
    const responseCreateBooking = await createABooking.json()
    
    //Dynamic id getting with const value
    const id = await responseCreateBooking.bookingid
    console.log("Id of request",id)

    //Delete booking request
    const deleteBooking = await page.request.delete(`https://restful-booker.herokuapp.com/booking/${id}`,{
      headers:{
        "Content-Type":"application/json",
        "Cookie":`token=${accessToken}`
      }
 })

 //Assertions
  await expect(deleteBooking.status()).toEqual(201)
  await expect(deleteBooking.ok()).toBeTruthy()
}))




 
