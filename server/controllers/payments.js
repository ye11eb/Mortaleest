import CloudIpsp from 'cloudipsp-node-js-sdk';
import axios from 'axios'
import crypto from 'crypto'
import bodyParser from 'body-parser'
import Order from "../models/Order.js";

export const Payments = async (req, res) => {
    try {
        const fondyPassword = 'test'

        const dataPayment = req.body
        const fondy = new CloudIpsp(
            {
              merchantId: 1396424,
              secretKey: 'test'
            }
          )
          
          const data = {
            order_id: dataPayment.payment_id,
            order_desc: 'test order',
            currency: dataPayment.priceValue,
            amount: dataPayment.totalPrice,
            response_url: "http://localhost:5000/api/payments/callback",
            server_callback_url : "http://localhost:5000/api/api/payments/finalResponse",
          }

          const signatureRAW = `${fondyPassword}|${data.actual_amount}|${data.actual_currency}|${data.amount}|${data.currency}|${data.merchant_id}|${data.order_desc}|${data.order_id}`
          const signature = crypto.createHash('sha1');
          const signature2 = crypto.createHash('sha1');
          signature.update(signatureRAW);

            fondy.Checkout(data).then(data => {;
            return res.json({data})
          }).catch((error) => {
            console.log(error)
          })         
        
    } catch (error) {
      res.json({message: `something went wrong: ${error}`})
    }
  }

  export const GetPayments = async (req, res) => {
    const dataPayment = req.body
    const fondyPassword = 'test'

    const data = {
      order_id: dataPayment.payment_id,
      order_desc: 'test order',
      currency: dataPayment.priceValue,
      merchant_id: 1396424,
      amount: dataPayment.totalPrice
    }

    const signatureRAW = `test|${data.amount}|${data.currency}|${data.merchant_id}|${data.order_desc}|${data.order_id}`
      const signature = crypto.createHash('sha1')
      signature.update(`${fondyPassword}|${signatureRAW}`)

    const fondy = new CloudIpsp(
          {
            merchantId: 1396424,
            secretKey: 'test'
          }
        )
    try {
      fondy.PciDssOne(data).then(data => {
        const statusData = {
          order_id: data.order_id
        }
        fondy.Status(statusData).then(data => {
          return res.json({data})
        })
      })
        
    } catch (error) {
      res.json({message: `something went wrong: ${error}`})
    }
  }

  export const callBack = async (req, res) => {
    const fondyPassword = 'test'
  
    const data = req.body;
  
    let signatureRaw = 0
    if (data.approval_code && data.rrn) {
      signatureRaw = `${data.actual_amount}|${data.actual_currency}|${data.additional_info}|${data.amount}|${data.approval_code}|${data.card_bin}|${data.card_type}|${data.currency}|${data.eci}|${data.masked_card}|${data.merchant_id}|${data.order_id}|${data.order_status}|${data.order_time}|${data.payment_id}|${data.payment_system}|${data.response_status}|${data.reversal_amount}|${data.rrn}|${data.sender_email}|${data.reversal_amount}|${data.tran_type}`
    } else {
      signatureRaw = `${data.actual_amount}|${data.actual_currency}|${data.additional_info}|${data.amount}|${data.card_bin}|${data.card_type}|${data.currency}|${data.eci}|${data.masked_card}|${data.merchant_id}|${data.order_id}|${data.order_status}|${data.order_time}|${data.payment_id}|${data.payment_system}|${data.response_status}|${data.reversal_amount}|${data.sender_email}|${data.reversal_amount}|${data.tran_type}`
    }
  
    const signature = crypto.createHash('sha1');
    signature.update(`${fondyPassword}|${signatureRaw}`);
  
    const serverSignature = signature.digest('hex');
    const clientSignature = data.signature;
    const order_id = data.order_id;

    try {
      if (serverSignature == clientSignature && data.order_status == 'approved') {
        // Find the order with the given payment ID
        const order = await Order.findOne({ "payment_id": order_id });
        if (!order) {
          throw new Error(`Could not find order with payment ID: ${order_id}`);
        }
  
        // Update the order's status
        await Order.findOneAndUpdate({ "payment_id": order_id }, {
          $set: {
            orderStatus: {
              eng: 'accepted',
              ukr: 'прийнято',
            },
          },
        });
  
        res.redirect(`http://localhost:3000/orderSuccess:${data.payment_id}`);
  
      } else {
        res.json({ message: 'ne dyakuyu' })
      }
  
    } catch (error) {
      res.json({ message: `something went wrong: ${error}` })
    }
  }


  export const finalResponse = async (req, res) => {
    const data = req;


    try {
      res.sendStatus(200)
        
    } catch (error) {
      res.json({message: `something went wrong: ${error}`})
    }
  }

  