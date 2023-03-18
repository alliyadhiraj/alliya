import React from 'react';
import App from '../App.css'
import logo from "./images/logo.png";
import { Typography, Button } from "@mui/material";


const Payment = () => {
    return (
        <>
            <div className="main-container">
                <div className="logo">
                    <img  src={logo} height={"-134px"} width={'250px'} alt="logo.png" />
                </div>
                    <div className="payment">
                        <Typography variant='h5' >Payment</Typography>
                        <Typography>Manage your payment bills</Typography>
                    </div>
                
            </div>

            <div className="portal">
                <div className='program'>
                    <Typography variant='h5'className='abhi'>Hi Abishek</Typography>
                    <Typography className='program'>Program Name</Typography>
                    <Typography className='disc'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, sed.</Typography>
                </div>

                

                    <div className="amount">
                        <div>
                            <Typography variant='h5'>Batch id</Typography>
                            <Typography>FSD 3r</Typography>
                        </div>

                        <div>
                            <Typography variant='h5'>Start Date </Typography>
                            <Typography>02/june/2023</Typography>
                        </div>

                        <div>
                            <Typography variant='h5'>Program Fess</Typography>
                            <Typography>4,00,000</Typography>
                        </div>

                        <div>
                            <Typography variant='h5'>Discount</Typography>
                            <Typography>10,000</Typography>
                        </div>

                        <div>
                            <Typography variant='h5'>Booking Amount</Typography>
                            <Typography>10,000</Typography>
                        </div>

                    </div>
                    
                    
                    
                    <div className='booking'>

                        <div className="payment-details">
                            <Typography variant='h5'>Payment Details</Typography >
                        </div>

                        <div className="pay">
                            <Typography variant='h4'>Next payment</Typography>
                            <Typography variant='h5'>20,000</Typography>
                            <Typography>Due Date: 11/03/2023</Typography>
                            <Button>Pay Now</Button>
                        </div>

                        <div className="full">
                            <Typography variant='h5'>Remaining Amount</Typography>
                            <Typography variant='h6'>30000</Typography>

                            <Button>Pay full Amount</Button>
                        </div>

                    </div>


                </div>

           </>
    )
}

export default Payment
