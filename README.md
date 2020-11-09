**Introduction**

This is a parking lot management system developed in SpringBoot.And Creating the REST API.

**Requirements**

1. Install Open JDK-11
2. MYSQL server
3. Setup a Maven 4.0.0 project

**Running the Application**

Application contains ParkingApplication.java file . This file contains the main method. When this file is run, end points are activated. Then requests are send to the endpoint. Endpoint provide responses corresponding to the request.

**Show Parking Lists**
----
  Returns json data.

 **URL**

       /parking
       
 **Method:**

      `GET`
  
 **URL Params**

    Required:
 
       None
       
**Data Params**

      None
       
**Success Response:**

  **Content:** `{ id : 12,  Car : 0  , bike : 0 , Van : 1 }`
       
 **Error Response:**

   **Code:**  NOT FOUND 
  
   - Content:  `{ error : "No message available" }`

**Add Parking detail**
----
  Returns Json of post details.

 **URL**

      /parking

 **Method:**

     `POST`
  
  **URL Params**

     Required:
 
      None

 **Data Params**

  **Content:** `{ id : 12,  Car : 0  , bike : 0 , Van : 1 }`

**Success Response:**

   **Content:** `{ id : 12,  Car : 0  , bike : 0 , Van : 1 }`
 
**Error Response:**

   **Code:**  NOT FOUND
  
   - Content: `{ error : "No message available" }`

**Show Customer Lists**
----
  Returns json data.

 **URL**

      /info

**Method:**

     `GET`
  
**URL Params**

     Required:
 
      None

**Data Params**

     None

**Success Response:**

  **Content:** `{ VehicleNo : 1221,  Name : "sive"  , Id : 1 , Vehicle  : 2 }`
 
**Error Response:**

   **Code:**  NOT FOUND 
  
   - Content:  `{ error : "No message available" }`

**Create Customer detail**
----
  Returns json data of Created Customer.

**URL**

     /info

**Method:**

    `POST`
  
**URL Params**

     Required:
 
     None

**Data Params**

   **Content:** `{ VehicleNo : 1221,  Name : "sive"  , Id : 1 , Vehicle  : 2 }`

**Success Response:**

  **Content:** `{ VehicleNo : 1221,  Name : "sive"  , Id : 1 , Vehicle  : 2 }`
 
**Error Response:**

  **Code:**  NOT FOUND 
  
  - Content: `{ error : "No message available" }`

**Delete Customer detail**
----
  Returns String Message ="Successfully deleted".

**URL**

    /info/VehicleNo

**Method:**

   `DELETE`
  
**URL Params**

    Required:
 
    `VehicleNo=Integer`

**Data Params**

      None

  **Success Response:**

  - Content: `{Message : Successfully deleted }`
 
**Error Response:**

   **Code:**  Internal Server Error 
  
   - Content: `{ error : "No class com.kathir.parking.parkingClass.Info entity with id 243 exists!" }`
     
  OR

   **Code:**  NOT FOUND 
  
   - Content: `{ error : "No message available" }`
   
   
## User Interface

**Parking**

    `Park Your Vehicle`
    
    `Unpark Your Vehicle`
    
    `Display Parking List`
    
    `Display Customer List`

**Park Your Vehicle**

 * Enter Name :____________
 * Enter VehicleNo :__________
 * VehicleType `Car` ` Bike` ` Van`

**Unpark Your Vehicle**

 * Enter Name :____________
 * Enter VehicleNo :__________
 * VehicleType `Car` ` Bike` ` Van`
 
 **Display Parking List**


| Id   |  Car  | Bike | Van |
|------|-------|------|-----|
|  1   |  1    |  0   |  1  |
|  2   | 0     |  1   |  0  |
|  3   |  0    |  1   |  1  |
|  4   |   1   |  0   |  0  |


**Display Customer List**


| VehileNo  |  Name   |  Id  | Vehicle |
|-----------|-------  |------|---------|
|  11122    |  siva   |  1   |  1      |
|  11234    |  mani   |  2   |  3      |
|  23131    |  Aji    |  1   |  2      |
|  22441    |  vasu   |  3   |  1      |

   
