import express, { type Request, Response } from "express";
import { Item } from "./models/item";

const app = express();
app.use(express.json());

let items: Item[] = [];
let nextId = 1;

// POST /items
app.post("/items", (req: Request, res: Response) => {
  const { name, quantity, purchased } = req.body;
  if (!name || !quantity) {
    return res.status(400).json({ error: "Name and quantity are required." });
  }

  const newItem: Item = {
    id: nextId++,
    name,
    quantity,
    purchased: purchased ?? false,
  };

  items.push(newItem);
  res.status(201).json(newItem);
});

// GET /items
app.get("/items", (req: Request, res: Response) => {
  res.json(items);
});

// GET /items/:id
app.get("/items/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const item = items.find(i => i.id === id);

  if (!item) return res.status(404).json({ error: "Item not found" });
  res.json(item);
});

// PUT /items/:id
app.put("/items/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const item = items.find(i => i.id === id);

  if (!item) return res.status(404).json({ error: "Item not found" });

  const { name, quantity, purchased } = req.body;
  if (name) item.name = name;
  if (quantity) item.quantity = quantity;
  if (purchased !== undefined) item.purchased = purchased;

  res.json(item);
});

// DELETE /items/:id
app.delete("/items/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const index = items.findIndex(i => i.id === id);

  if (index === -1) return res.status(404).json({ error: "Item not found" });

  items.splice(index, 1);
  res.status(204).send();
});



export default app;
