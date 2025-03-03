import { FastifyInstance } from "fastify";
import { Deletequestion, UpdateSurvey } from "../controllers/surveyUpdate";
import { OptionofType, OptionsDatabase, OptionsShow } from "../controllers/options";




export async function Options(fastify: FastifyInstance) {
  fastify.get("/options",{
            preHandler: [fastify.authenticate],
        }, OptionsDatabase);
fastify.get("/optionsShow",{
            preHandler: [fastify.authenticate],
        }, OptionsShow);
    fastify.get("/options/:id",{
            preHandler: [fastify.authenticate],
        }, OptionofType);
  
}