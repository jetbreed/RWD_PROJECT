<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RWD Intro</title>

    <style>
        html
        {
            font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        }

        .header
        {
            background-color: #0000ff;
            color: #fff;
            padding: 15px;
            background-image: url(img/kid-code6.jpg);
            width: 100%;
            margin-left: -12px;
        }

        .menu
        {
            width: 92%;
            background-color: #fff;
        }

        .menu ul
        {
            list-style: none;
            margin: -10px;
            padding: 0;
        }

        .menu li
        {
            padding: 8px;
            margin-bottom: 7px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.232), 
            0 1px 2px rgba(0,0,0,0.24);
        }
        
        a
        {
            text-decoration: none;
        }

        a:hover
        {
            color: #000 !important;
            
        }

        .nav
        {
            width: 100%;
        }

        .nav ul
        {
            display: flex;
            flex-direction: row;
        }
        
        .nav ul a
        {
            width: 100%;
            text-align: center;
        }
        
        .nav li:hover
        {
            background: #fff;
            color: #0000ff;
        }

        .footer
        {
            background-color: #0000ff;
            color: #fff;
            text-align: center;
            font-size: 12px;
            padding: 15px;
            clear: both;
        }

        @media screen and (min-width: 600px)
        {
            .col-s-3
            {
                width: 25%;
            }            
        }

        div .menu ul li
        {
            color: #fff;
            background-color: #0000ff;
        }

        /* div:first-of-type
        {
            background-color: green;
        }


        div:last-of-type
        {
            background-color: tomato;
        } */


        /* div:nth-child(2)
        {
            background-color: aqua;
        } */

        /* div:nth-last-child(1)
        {
            background-color: aqua;
        } */

        /* div[class^=menu]
        {
            border: 10px solid #cd3333;
        } */

        /* div[class$=nav]
        {
            border: 10px solid #cd3333;
        }

        div[class*=nav]
        {
            border: 10px solid #cd3333;
        } */

        @media screen and (min-width: 600px)
        {
            .col-s-3
            {
                width: 25%;
            } 
            
            .col-s-9
            {
                width: 75%;
            }
        }

        @media screen and (max-width: 609px)
        {
            .nav
            {
                display: none;

            } 
            
            /* .menu
            {
                width: 100%;
            } */
        }

        @media screen 
        and (min-width: 600px)
        {
            .col-s-3
            {
                width: 25%;
            }

            .col-sm-9
            {
                width: 75%;
            }
            
            .col-s-12
            {
                width: 100%;
            }
        }

        @media screen 
        and (max-width: 608px)
        {
            .col-sm-3
            {
                width: 25% !important;
            }
        }
        
        @media screen 
        and (min-width: 610px)
        {
            .col-sm-3-nav
            {
                display: none;
            }
            .col-md-6
            {
                width: 60%;
            }
        }

        [class*="col-"]
        {
            float: left;
            padding: 15px;
            /* width: 100%; */
        }
/* 
        .row::after{
            clear: both;
            display: table;
        } */
        </style>

</head>
