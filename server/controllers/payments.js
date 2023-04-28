import CloudIpsp from 'cloudipsp-node-js-sdk';
import axios from 'axios'
import crypto from 'crypto'

export const Payments = async (req, res) => {
    try {
        // console.log(req);

        // const fondyPassword = 'test'

        // const signatureRAW = `test|5000|UAH|1397120|gimno *2|ID1234`

        // const signature = crypto.createHash('sha1')
        // console.log(signature);
        // signature.update(`${fondyPassword}|${signatureRAW}`)
        // console.log(signature.update(`${fondyPassword}|${signatureRAW}`));

        // const orderBody = {
        //     order_id: 'ID1234',
        //     merchant_id: '1397120',
        //     order_desc: 'gimno *2',
        //     signature,
        //     amount:5000,
        //     currency: 'UAH'
        // }

        // // console.log(orderBody);

        // // const signature = `test|${amount}|${currency}|${merchant_id}|${order_desc}|${order_id}`

        // // return console.log(signature);

        // const { data } = await axios.post("https://pay.fondy.eu/api/checkout/url/", {
        //     request : {
        //         orderBody,
        //         signature: signature.digest('hex')
        //     }
        // })

        // // const fondy = new CloudIpsp(
        // //   {
        // //     merchantId: 1396424,
        // //     secretKey: 'test'
        // //   }
        // // )
        // // const requestData = {
        // //   order_id: 'Your Order Id',
        // //   order_desc: 'test order',
        // //   currency: 'USD',
        // //   amount: '1000'
        // // }
        // // fondy.Checkout(requestData).then(data => {
        // //   console.log(data)
        // // }).catch((error) => {
        // //   console.log(error)
        // // })

        // console.log('huy');
        console.log(req.body);
        const dataPayment = req.body
        const fondy = new CloudIpsp(
            {
              merchantId: 1396424,
              secretKey: 'test'
            }
          )
          const requestData = {
            order_id: dataPayment.payment_id,
            order_desc: 'test order',
            currency: dataPayment.priceValue,
            amount: dataPayment.totalPrice
          }

          console.log(requestData);
            fondy.Checkout(requestData).then(data => {
            return res.json({data})
            
          }).catch((error) => {
            console.log(error)
          })
          

        
    } catch (error) {
      res.json({message: `something went wrong: ${error}`})
    }
  }