# 🛒 Shopping List API

## 📘 Overview
The **Shopping List API** is a simple RESTful API built with **Express** and **TypeScript**.  
It allows users to manage a shopping list — you can **add**, **view**, **update**, and **delete** items dynamically.

Each item includes:
- `id`: A unique identifier
- `name`: The name of the item
- `quantity`: How many of the item to buy
- `purchased`: A boolean indicating if the item has been bought

---

## 🧰 Tech Stack
- **Node.js**
- **Express.js**
- **TypeScript**

---

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/shopping-list-api.git
   cd shopping-list-api
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the TypeScript compiler (optional if using ts-node)**
   ```bash
   npx tsc
   ```

4. **Start the development server**
   ```bash
   npx ts-node src/index.ts
   ```
   or if you have a separate entry file:
   ```bash
   npm run dev
   ```

5. The server will run on:
   ```
   http://localhost:3000
   ```

---

## 🧾 API Endpoints

| Method | Endpoint | Description |
|--------|-----------|-------------|
| **POST** | `/items` | Add a new item to the shopping list |
| **GET** | `/items` | Retrieve all shopping list items |
| **GET** | `/items/:id` | Get a single item by its ID |
| **PUT** | `/items/:id` | Update an existing item |
| **DELETE** | `/items/:id` | Delete an item by ID |

---

## 📦 Example Requests

### ➕ Add a New Item
**POST** `/items`
```json
{
  "name": "Apples",
  "quantity": 5
}
```

✅ **Response**
```json
{
  "id": 1,
  "name": "Apples",
  "quantity": 5,
  "purchased": false
}
```

---

### 📋 Get All Items
**GET** `/items`

✅ **Response**
```json
[
  { "id": 1, "name": "Apples", "quantity": 5, "purchased": false },
  { "id": 2, "name": "Bread", "quantity": 2, "purchased": true }
]
```

---

### ✏️ Update an Item
**PUT** `/items/1`
```json
{
  "purchased": true
}
```

✅ **Response**
```json
{
  "id": 1,
  "name": "Apples",
  "quantity": 5,
  "purchased": true
}
```

---

### ❌ Delete an Item
**DELETE** `/items/1`

✅ **Response**
```
Status: 204 No Content
```

---


## 👨‍💻 Author
**Andile Manganye**  

