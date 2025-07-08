Restful Booker API Testing Project
Project Overview
This project provides an automated API testing suite for the restful-booker.herokuapp.com API. Developed using Playwright, it focuses on validating the core CRUD (Create, Read, Update, Delete) operations for bookings, as well as token creation for authentication. This project demonstrates robust API testing practices, ensuring the reliability and functionality of the API endpoints.

Project Goal
The main objectives of this project are to:

Automate the process of creating authentication tokens for API access.

Validate the successful creation of new booking entries via the API.

Verify the ability to retrieve existing booking details using their IDs.

Test the functionality of updating existing booking information.

Ensure the successful deletion of booking entries.

Implement comprehensive API test scenarios covering all major HTTP methods (POST, GET, PUT, DELETE).

Showcase the practical application of Playwright for efficient and reliable API testing.

Technologies Used
Test Automation Framework: Playwright (for API Testing)

Programming Language: TypeScript / JavaScript (Node.js)

API Endpoints: restful-booker.herokuapp.com

Setup and Run Instructions
To set up and run this project locally, follow these steps:

Clone the Repository:

git clone https://github.com/BoraSari/ApiProjectWithPostmanAndPlayWright.git
cd ApiProjectWithPostmanAndPlayWright

(Note: Replace BoraSari with your actual GitHub username if different. Adjust the repository name if it's different in your actual GitHub setup.)

Install Node.js:
Ensure you have Node.js (which includes npm) installed on your system. You can download it from nodejs.org.

Install Playwright and Dependencies:
Navigate to your project directory and install Playwright.

npm install

(You'll need a package.json file in your project with Playwright listed as a dependency.)

Configure API Base URL (if not in code):
Ensure the API base URL (restful-booker.herokuapp.com) is correctly configured in your test files or a configuration file.

Run the Tests:

npx playwright test

To run tests in a specific browser (though API tests don't require a browser, Playwright's test runner is used):

npx playwright test --project=chromium # This will still run API tests

To open Playwright UI Reporter after tests run:

npx playwright test --ui

Test Coverage and Scenarios
This project covers the following key scenarios for the Restful Booker API:

Token Creation:

Description: Verifies the successful generation of an authentication token.

Flow: Sends a POST request to the /auth endpoint with valid credentials and asserts that a token is returned.

Create Booking (POST):

Description: Tests the creation of a new booking entry.

Flow: Sends a POST request to the /booking endpoint with valid booking data and asserts a successful response (e.g., status 200, booking ID returned).

Get Booking (GET):

Description: Validates the retrieval of booking details.

Flow: Sends a GET request to the /booking/{id} endpoint using a previously created booking ID and asserts that the returned data matches the expected details.

Update Booking (PUT):

Description: Verifies the modification of an existing booking.

Flow: Sends a PUT request to the /booking/{id} endpoint with updated booking data and the authentication token, asserting that the booking details are successfully modified.

Delete Booking (DELETE):

Description: Tests the removal of a booking entry.

Flow: Sends a DELETE request to the /booking/{id} endpoint with the authentication token and asserts a successful deletion response (e.g., status 201).

Screenshots/GIFs
![image](https://github.com/user-attachments/assets/58a12c6d-a7d1-44fa-907a-5d065a0c2a75)


License
This project is licensed under the MIT License - see the LICENSE file for details.

Restful Booker API Test Otomasyon Projesi
Projeye Genel Bakış
Bu proje, restful-booker.herokuapp.com API'si için otomatik bir API test paketi sunar. Playwright kullanılarak geliştirilmiştir ve kimlik doğrulama için token oluşturmanın yanı sıra rezervasyonlar için temel CRUD (Oluşturma, Okuma, Güncelleme, Silme) işlemlerini doğrulamaya odaklanır. Bu proje, API uç noktalarının güvenilirliğini ve işlevselliğini sağlamak için sağlam API test uygulamalarını göstermektedir.

Proje Amacı
Bu projenin temel hedefleri şunlardır:

API erişimi için kimlik doğrulama tokenları oluşturma sürecini otomatikleştirmek.

API aracılığıyla yeni rezervasyon girişlerinin başarılı bir şekilde oluşturulduğunu doğrulamak.

Mevcut rezervasyon detaylarını ID'leri kullanarak alabilme yeteneğini doğrulamak.

Mevcut rezervasyon bilgilerini güncelleme işlevselliğini test etmek.

Rezervasyon girişlerinin başarılı bir şekilde silindiğinden emin olmak.

Tüm ana HTTP metotlarını (POST, GET, PUT, DELETE) kapsayan kapsamlı API test senaryoları uygulamak.

Verimli ve güvenilir API testi için Playwright'ın pratik uygulamasını sergilemek.

Kullanılan Teknolojiler
Test Otomasyon Çerçevesi: Playwright (API Testi için)

Programlama Dili: TypeScript / JavaScript (Node.js)

API Uç Noktaları: restful-booker.herokuapp.com

Kurulum ve Çalıştırma Talimatları
Bu projeyi yerel olarak kurmak ve çalıştırmak için aşağıdaki adımları izleyin:

Depoyu Klonlayın:

git clone https://github.com/BoraSari/ApiProjectWithPostmanAndPlayWright.git
cd ApiProjectWithPostmanAndPlayWright

(Not: BoraSari yerine gerçek GitHub kullanıcı adınızı yazın. GitHub'daki gerçek kurulumunuz farklıysa depo adını ayarlayın.)

Node.js'i Yükleyin:
Sisteminizde Node.js'in (npm dahil) yüklü olduğundan emin olun. nodejs.org adresinden indirebilirsiniz.

Playwright ve Bağımlılıkları Yükleyin:
Proje dizininize gidin ve Playwright'ı yükleyin.

npm install

(Projenizde Playwright'ın bağımlılık olarak listelendiği bir package.json dosyası olması gerekmektedir.)

API Temel URL'sini Yapılandırın (kodda değilse):
API temel URL'sinin (restful-booker.herokuapp.com) test dosyalarınızda veya bir yapılandırma dosyasında doğru bir şekilde yapılandırıldığından emin olun.

Testleri Çalıştırın:

npx playwright test

Belirli bir tarayıcıda testleri çalıştırmak için (API testleri tarayıcı gerektirmese de, Playwright'ın test çalıştırıcısı kullanılır):

npx playwright test --project=chromium # Bu yine API testlerini çalıştıracaktır

Testler çalıştıktan sonra Playwright UI Raporlayıcısını açmak için:

npx playwright test --ui

Test Kapsamı ve Senaryoları
Bu proje, Restful Booker API'si için aşağıdaki temel senaryoları kapsar:

Token Oluşturma:

Açıklama: Kimlik doğrulama tokenının başarılı bir şekilde oluşturulduğunu doğrular.

Akış: Geçerli kimlik bilgileriyle /auth uç noktasına bir POST isteği gönderir ve bir tokenın döndürüldüğünü doğrular.

Rezervasyon Oluşturma (POST):

Açıklama: Yeni bir rezervasyon girişinin oluşturulmasını test eder.

Akış: Geçerli rezervasyon verileriyle /booking uç noktasına bir POST isteği gönderir ve başarılı bir yanıtı (örn: durum 200, rezervasyon ID'si döndürüldü) doğrular.

Rezervasyon Alma (GET):

Açıklama: Rezervasyon detaylarının alınmasını doğrular.

Akış: Daha önce oluşturulmuş bir rezervasyon ID'si kullanarak /booking/{id} uç noktasına bir GET isteği gönderir ve döndürülen verilerin beklenen detaylarla eşleştiğini doğrular.

Rezervasyon Güncelleme (PUT):

Açıklama: Mevcut bir rezervasyonun değiştirilmesini doğrular.

Akış: Güncellenmiş rezervasyon verileri ve kimlik doğrulama tokenı ile /booking/{id} uç noktasına bir PUT isteği gönderir ve rezervasyon detaylarının başarıyla değiştirildiğini doğrular.

Rezervasyon Silme (DELETE):

Açıklama: Bir rezervasyon girişinin kaldırılmasını test eder.

Akış: Kimlik doğrulama tokenı ile /booking/{id} uç noktasına bir DELETE isteği gönderir ve başarılı bir silme yanıtını (örn: durum 201) doğrular.

Screenshots/GIFs
(API testleri genellikle görsel değildir, ancak CI/CD boru hattındaki test sonuçlarını veya Postman/Insomnia gibi araçlardan API çağrılarının başarılı yanıtlarını gösteren ekran görüntüleri veya GIF'ler ekleyebilirsiniz.)


