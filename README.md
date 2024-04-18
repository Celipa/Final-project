BackEnd utveckling

ecommerce Rest api
Krav för godkänt:

NoSQL: Ditt API ska kopplas mot en NoSQL databas tex. MongoDB.

JSON svar: Alla svar från databasen ska skickas till användaren i form av JSON.

Lista produkter: Man ska kunna hämta alla produkter som en lista från databasen genom att göra en GET

Enskild produkt: Man ska kunna hämta en enskild produkt från databasen med en GET och att man skickar med id på produkten.

Lägga till produkt: Man ska kunna lägga till en produkt på databasen med en POST

Uppdatera produkt: Man ska kunna uppdatera en produkt på databasen med PUT eller PATCH

Ta bort produkt: Man ska kunna ta bort en produkt från databasen med DELETE

Meddelanden: Ni ska skapa en separat endpoint där användaren kan skicka ett meddelande med en POST. Där ska ni validera att fälten `name`, `email` & `message` har skickats med.


För att starta igång projektet behöver du göra följande:
tryck på Electroverse BackEnd mappen och öppna en ny terminal
kör npm run test i terminalen för att starta servern.

det finns en frontend del till också, för att starta den kör npm run dev.

APIet är uppkopplat till en MongoDB databas och har en collection
för att få allt att funka behöver du skapa en .env fil
och kopiera in detta i den:

PORT=3000
MONGO_URI=mongodb+srv://AlvaDb:BytMig123@testdb.s0fjhfi.mongodb.net/NodeAPI?retryWrites=true&w=majority&appName=TestDB
JWT_SECRET=SECRET_KEY



Jag har använt mig av postman för att testa mina endpoints och jag har använt mig av express för att skapa mina endpoints.
tyvärr har jag inte lyckats att få delar av väl godkänt att fungera.


Det går att hämta alla produkter från databasen med postman
Det går att hämta en enskild produkt från databasen med postman
Det går att lägga till en produkt i databasen med postman
Det går att uppdatera en produkt i databasen med postman
Det går att ta bort en produkt från databasen med postman
Det går att skicka ett meddelande med postman
Alla svar skickas i JSON format


För väl godkänt har jag gjort följande:

Det går att registera en användare med postman
Det går att logga in den registrerade användaren med postman
Användarens lösenord blir krypterat.

(Dessa är för backend och skrivs ut i JSON format.)
http://localhost:3000/api/products
http://localhost:3000/api/products/(produkt id)
http://localhost:3000/api/products

http://localhost:3000/api/users


http://localhost:3000/api/messages

Jag har använt mig av postman för att testa mina endpoints och jag har använt mig av express för att skapa mina endpoints.

Tyvärr har jag inte hunnit färdigt att få delar av väl godkänt att fungera.
Det går inte att hämta orderhistorik från databasen
Det går inte att lägga till en order i databasen
(Jag fick det att funka men sen slarvade jag till koden)


Det kan finnas oanvända koder i projektet så låt inte de förvirra dig.
Jag hade skapat kod i min FrontEnd del från javascript 2 men den ville inte laddas upp på github. så jag uteslut den från repot denna gången
