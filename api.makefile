1)- 

url: https://kodluyoruzrn55.herokuapp.com/register
type: POST
işlev: kayıt olma
örnek request: 
{
	"email": "csert@test.com",
	"password": "1234",
	"firstName": "cagatay",
	"lastName": "sert"
}

örnek response: 
{
  "status": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMzcwMDBlMTY4MjM1NDUwZmRkZDcxNSIsImlhdCI6MTU5NzQ0MDAxNCwiZXhwIjoxNTk3NjEyODE0fQ.r_pVuy-6BCmlVK7QzJZpIvHzm0RuMhg7KzQPYlYK9n0",
  "user": {
    "_id": "5f37000e168235450fddd715",
    "firstName": "cagatay",
    "lastName": "sert",
    "email": "csert@test.com",
    "password": "$2b$10$4zWLT9NVwqtmw/VxrZxKUeBUfzarcKGH/VcrtIcDtWpHkbnVm6rCu",
    "__v": 0
  },
  "message": "Created Succesfully"
}

not: tüm alanlar zorunludur.

------------------------------------------------------------------------------------------------

2)-

url: https://kodluyoruzrn55.herokuapp.com/login
type: POST
işlev: giriş
örnek request:
{
	"email":"csert@test.com",
	"password": "1234"
}

örnek response: 
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMzZmNjVkZWU1YTc3M2EyNzc0NzI3MyIsImlhdCI6MTU5NzQ0MzMxOSwiZXhwIjoxNTk3NjE2MTE5fQ.hy9Sehb6PWjYuhGkAiOOB9sJUrwgNgMEG2JLSe6XiaM",
  "message": "Success"
}
------------------------------------------------------------------------------------------------

3)-


url: https://kodluyoruzrn55.herokuapp.com/api/characters
type: GET
işlev: db'de kayıtlı tüm karakterleri çekebilirsiniz  .
authorization: gerekli. Header'a authorization key'i karşısına Bearer token eklemek zorunlu.
Örnek header:

authorization  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMzcwMDBlMTY4MjM1NDUwZmRkZDcxNSIsImlhdCI6MTU5NzQ0MDAxNCwiZXhwIjoxNTk3NjEyODE0fQ.r_pVuy-6BCmlVK7QzJZpIvHzm0RuMhg7KzQPYlYK9n0

not: token gerekli olan tüm servisler başında /api var. Bunu koymak zorunlu o servislere gidebilmek için.

------------------------------------------------------------------------------------------------

4)- 

url: https://kodluyoruzrn55.herokuapp.com/api/characterById
type:GET
işlev: verilen id'ye göre varsa ilgili kaydı getirir.
authroization yine aynı şekilde kuullanılabilir. Zorunludur.
örnek request: 
{
  "id": "5f370699b09cbf4c4013b070"
}

örnek response: 
{
  "success": true,
  "character": [
    {
      "_id": "5f370699b09cbf4c4013b070",
      "name": "Morty Smith",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Male",
      "origin": {
        "name": "Earth (C-137)",
        "url": "https://rickandmortyapi.com/api/location/1"
      },
      "location": {
        "name": "Earth (Replacement Dimension)",
        "url": "https://rickandmortyapi.com/api/location/20"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/1",
        "https://rickandmortyapi.com/api/episode/2"
      ],
      "url": "https://rickandmortyapi.com/api/character/2",
      "created": "2017-11-04T18:50:21.651Z",
      "__v": 0
    }
  ],
  "message": "Success"
}


---------------------------------------------------------------------------------------------------

5)-

url: https://kodluyoruzrn55.herokuapp.com/api/addCharacter
type: POST
işlev: db'ye yeni kayıt ekler.
authorization: gerekli ve aynı şekilde kullanılmalı.
örnek request: 
{
  "test": "2134"
  "denem": "hello"
}

örnek response:
{
  "success": true,
  "newCharacter": {
    "_id": "5f37140975054868d22a50a8",
    "test": "2134",
    "deneme": "hello"
    "__v": 0
  },
  "message": "Success"
}

not: karaktere bir kısıtlama koymadım. İstediğiniz şekilde bir json objesini sisteme kaydedebilirsiniz. Kayıt başarıyla eklenirse db'ye , eklnen kaydı size geri döndürüyorum.
