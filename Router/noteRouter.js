import { Router } from "express";
import { addnote, deletenote, updateNote } from "../Controllers/noteController.js";

export const noteRouter = Router()

noteRouter.post("/add",async(req , res)=>{
  await addnote(req , res)
});

noteRouter.delete("/delete/:id",async(req , res)=>{
  await deletenote(req , res)
});

noteRouter.put("/update/:id",async(req , res)=>{
  await updateNote(req , res)
});