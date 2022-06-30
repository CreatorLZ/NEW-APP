import React from 'react'
import { ArrowDropDownOutlined, ArrowDropUpOutlined, CategoryOutlined,  CloseRounded, FaceRounded, FilterList, LocationSearchingRounded, PermIdentityOutlined, PermIdentityRounded, ShoppingCart,   } from "@material-ui/icons";


export const SidebarData = [
    {
        title: "Account",
        icon: <PermIdentityOutlined />,
        iconClosed: <ArrowDropDownOutlined/>,
        iconOpened: <ArrowDropUpOutlined/>,
        subNav: [
            {
                title: "Sign-In",
                path: 'login',
                icon: <FaceRounded />,
            },
            {
                title: "Sign-Up",
                path: 'register',
                icon: <PermIdentityRounded />,
            },
        ]
    },
    {
        title: "Categories",
        icon: <CategoryOutlined />,
        iconClosed: <ArrowDropDownOutlined />,
        iconOpened: <ArrowDropUpOutlined />,
        subNav: [
            {
                title: "Men",
                path: "products/men",
                
            },
            {
                title: "Women",
                path: 'products/women',
                
            },
            {
                title: "Kitchen",
                path:"products/kitchen" 
                
            },
            {
                title: "Gaming",
                path: 'products/gaming',
                
            },
        ]
    },

    {
        title: 'Cart',
        path: "cart",
        icon: <ShoppingCart />,
    },
    {
        title: 'Order tracking',
        path: '#',
        icon: <LocationSearchingRounded />,
    },
    {
        title: 'Wishlist',
        path: '#',
        icon: <FilterList />,
    },
]