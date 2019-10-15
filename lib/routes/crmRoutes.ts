import {Request, Response} from "express";
import { ContactController } from "../controllers/crmController";

export class Routes {

  public contactController: ContactController = new ContactController()

    public routes(app): void {          
      app.route('/')
      .get((req: Request, res: Response) => {            
          res.status(200).send({
              message: 'GET request successfulll!'
          })
      })
      
      // Contact 
      app.route('/contact') 
      // GET endpoint 
      .get((req: Request, res: Response) => {
      // Get all contacts            
          res.status(200).send({
              message: 'GET request successfulll!'
          })
      })        
      // POST endpoint
      .post((req: Request, res: Response) => {   
      // Create new contact         
          res.status(200).send({
              message: 'POST request successfulll!'
          })
      })

      // Contact detail
      app.route('/contact/:contactId')
      // get specific contact
      .get(this.contactController.getContactWithID)
      .put(this.contactController.updateContact)
      .delete(this.contactController.deleteContact)          
    }
}
