import { Message } from "../models/messageSchema.js"; 

export const sendMessage = async(req, res) =>{


    try{

        
            const {name, email, subject, message}  = req.body;
            if(!name || !email || !subject || !message ){
                return res.status(400).json({
                    sucess:false,
                    message:"All fields are required!",
        
                });
            }
            await Message.create({name, email, subject, message});
            res.status(200).json({
                sucess:true,
                message:"Message Sent Sucessfully",
            })
    }catch(error){

        if(error.name === "ValidationError"){
            let errorMessage = "";
            if(error.error.name){
                errorMessage += error.errors.name.message+ " "
            }
            if(error.error.email){
                errorMessage += error.errors.email.message+ " "
            }
            if(error.error.subject){
                errorMessage += error.errors.subject.message+ " "
            }
            if(error.error.message){
                errorMessage += error.errors.message.message+ " "
            }
            return res.status(400).json({
                sucess:false,
                message:errorMessage,
            });
        }


        return res.status(500).json({
            sucess:false,
            message:"Unknown Error",
        });
    }

};