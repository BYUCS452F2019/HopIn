// import * as functions from 'firebase-functions';
// import { connect } from './config';

// import { Hippo } from './entity/Hippo';
// import {Hat} from './entity/user';

// export const createHippo = functions.https.onRequest(async (request, response) => {

//     const { name, weight } = request.body;

//     try {
//         const connection = await connect();

//         const repo = connection.getRepository(Hippo);

//         const newHippo = new Hippo();
//         newHippo.name = name;
//         newHippo.weight = weight;


//         const savedHippo = await repo.save(newHippo);

//         response.send(savedHippo);

//     } catch (error) {
//         response.send(error)
//     }

// });

// export const getHippos = functions.https.onRequest(async (request, response) => {
//     const connection = await connect();
//     const hippoRepo = connection.getRepository(Hippo);

//     const allHippos = await hippoRepo.find();
//     // const someHippos = await hippoRepo.query('Select name from hippo where weight > 5');

//     response.send(allHippos)
// });

// // export const getHippos = functions.https.onRequest(async (request, response) => {

// //     const connection = await connect();
// //     const hippoRepo = connection.getRepository(Hippo);

// //     // JOIN Query
// //     const hipposWearingHats = await hippoRepo
// //                                 .createQueryBuilder('hippo')
// //                                 .leftJoinAndSelect('hippo.hats', 'hat')
// //                                 .getMany();

// //     response.send(hipposWearingHats);

// // });


// export const createHat = functions.https.onRequest(async (request, response) => {

//     const { owner, color } = request.body;

//     const connection = await connect();
//     const repo = connection.getRepository(Hat);

//     const newHat = new Hat();
//     newHat.owner = owner;
//     newHat.color = color;

//     const savedHat = await repo.save(newHat);
//     response.send(savedHat);
// });