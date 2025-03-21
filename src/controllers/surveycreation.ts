import { FastifyReply, FastifyRequest } from "fastify";
import { Login } from "../services/auth";
import {  createSurvey } from "../services/createsurvey";

export async function CreateSurvey(req: FastifyRequest, reply: FastifyReply) {
const user=req.user
const body=req.body;
console.log("hi")
  const result = await createSurvey(user,body);
  console.log(result)
  if (result.data) {
    return reply.status(200).send(result);
  } else {
    // If there was an error, send a 401 Unauthorized status
    return reply.status(500).send(result);
  }
}
