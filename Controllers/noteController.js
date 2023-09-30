import mongoose from "mongoose";
import { APP_STATUS } from "../constant/app_status.js"
import { noteTable } from "../model/noteSchema.js";


export const addnote = async (req, res) => {
    try {
        const { notename, description } = req.body;
        let theNote = {
            notename: notename,
            description: description
        }
        let newNote = await new noteTable(theNote).save();
        return res.status(200).json({
            status: APP_STATUS.SUCCESS,
            msg: "Note add SuccessFulyy!..",
            data: newNote
        });
    } catch (error) {
        return res.status(500).json({
            status: APP_STATUS.FAILED,
            msg: "Internal Server Error",
            Error: error
        })

    }
}

export const deletenote = async (req, res) => {
    try {
        const { id } = req.params
        const mongoId = new mongoose.Types.ObjectId(id)

        let deleteNote = await noteTable.findByIdAndDelete(mongoId)
        if (deleteNote) {

            return res.status(200).json({
                status: APP_STATUS.SUCCESS,
                msg: "Note delete SuccessFuly!..",
                data: deleteNote
            });
        }
    } catch (error) {
        return res.status(500).json({
            status: APP_STATUS.FAILED,

            msg: "Internal Server Error",
            Error: error
        })

    }
}

export const updateNote = async (req, res) => {
    try {
        const { id } = req.params
        const { notename, description } = req.body
        const mongoId = new mongoose.Types.ObjectId(id)
        let theNote = {
            notename: notename,
            description: description
        }
        let updateNote = await noteTable.findByIdAndUpdate(mongoId, {
            $set: theNote
        }, { new: true })
        if (updateNote) {

            return res.status(200).json({
                status: APP_STATUS.SUCCESS,
                msg: "Note update SuccessFuly!..",
                data: updateNote
            });
        }
    } catch (error) {
        return res.status(500).json({
            status: APP_STATUS.FAILED,

            msg: "Internal Server Error",
            Error: error
        })

    }
}