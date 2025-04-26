import React from "react";
import ReactDOM from "react-dom/client";
import { Ep3Assignement } from "./ep3Assignement";

/**
 * Header
 *      - logo
 *      - Nav items
 * Body
 *      - Search
 *      - Restaurant cards
 *          - Img
 *          - Name of restaurant, rating, cuisine, delivery time
 */



const Header = ()=>{
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        Home
                    </li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}


const restList = [
    {
      "info": {
        "id": "73434",
        "name": "Pizza Hut",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/9e1e8447-ae29-4a6c-9c02-51a52a6ce158_73434.jpg",
        "locality": "Baner",
        "areaName": "Baner",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Pizzas"
        ],
        "avgRating": 4.1,
        "parentId": "721",
        "avgRatingString": "4.1",
        "totalRatingsString": "9.1K+",
        "sla": {
          "deliveryTime": 33,
          "lastMileTravel": 1.2,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "1.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-18 02:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.6",
            "ratingCount": "1.7K+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-6c5740f7-aacf-4556-b410-93cd6f3e6273"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/pune/pizza-hut-baner-rest73434",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "479583",
        "name": "Chinese Wok",
        "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
        "locality": "Kalamkar Avenue",
        "areaName": "Baner",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Chinese",
          "Asian",
          "Tibetan",
          "Desserts"
        ],
        "avgRating": 4.1,
        "parentId": "61955",
        "avgRatingString": "4.1",
        "totalRatingsString": "4.5K+",
        "sla": {
          "deliveryTime": 42,
          "lastMileTravel": 2,
          "serviceability": "SERVICEABLE",
          "slaString": "40-45 mins",
          "lastMileTravelString": "2.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-17 23:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹129"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-6c5740f7-aacf-4556-b410-93cd6f3e6273"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/pune/chinese-wok-kalamkar-avenue-baner-rest479583",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "565123",
        "name": "Burger King",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/662bb58f-7b46-40e3-938a-6ca094b2677a_565123.JPG",
        "locality": "Panchshil Business Park",
        "areaName": "Baner",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Burgers",
          "American"
        ],
        "avgRating": 4.3,
        "parentId": "166",
        "avgRatingString": "4.3",
        "totalRatingsString": "9.8K+",
        "sla": {
          "deliveryTime": 36,
          "lastMileTravel": 0.7,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "0.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-18 04:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-6c5740f7-aacf-4556-b410-93cd6f3e6273"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/pune/burger-king-panchshil-business-park-baner-rest565123",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "32454",
        "name": "Natural Ice Cream",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/8/0fcaa255-1622-4fe3-a2d2-5d11fdd6151b_32454.JPG",
        "locality": "Shani Nagar",
        "areaName": "Baner",
        "costForTwo": "₹150 for two",
        "cuisines": [
          "Ice Cream",
          "Desserts"
        ],
        "avgRating": 4.8,
        "veg": true,
        "parentId": "2093",
        "avgRatingString": "4.8",
        "totalRatingsString": "11K+",
        "sla": {
          "deliveryTime": 34,
          "lastMileTravel": 2.1,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "2.1 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-18 00:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-6c5740f7-aacf-4556-b410-93cd6f3e6273"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/pune/natural-ice-cream-shani-nagar-baner-rest32454",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "191201",
        "name": "The Biryani Life",
        "cloudinaryImageId": "kwpu4ranudp9w9vxhsrr",
        "locality": "BANER",
        "areaName": "Balewadi",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Biryani",
          "Mughlai",
          "Lucknowi",
          "Hyderabadi",
          "Kebabs",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.1,
        "parentId": "8496",
        "avgRatingString": "4.1",
        "totalRatingsString": "2.1K+",
        "sla": {
          "deliveryTime": 39,
          "lastMileTravel": 0.4,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "0.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-17 23:59:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹49"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-6c5740f7-aacf-4556-b410-93cd6f3e6273"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/pune/the-biryani-life-baner-balewadi-rest191201",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "566178",
        "name": "Faasos Signature Wraps & Rolls",
        "cloudinaryImageId": "c583ca6ce40b426797a78ae2ac91f2ec",
        "locality": "BANER",
        "areaName": "Balewadi",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Fast Food",
          "Snacks",
          "North Indian",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.3,
        "parentId": "340366",
        "avgRatingString": "4.3",
        "totalRatingsString": "394",
        "sla": {
          "deliveryTime": 34,
          "lastMileTravel": 0.4,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "0.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-17 23:59:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹63",
          "discountCalloutInfo": {
            "message": "Free Delivery",
            "logoCtx": {
              "logo": "v1655895371/free_delivery_logo_hqipbo.png"
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-6c5740f7-aacf-4556-b410-93cd6f3e6273"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/pune/faasos-signature-wraps-and-rolls-baner-balewadi-rest566178",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "795918",
        "name": "Olio - The Wood Fired Pizzeria",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/26/bbe34419-b9d0-4e44-a364-10c17324d2d8_795918.jpg",
        "locality": "Emisur",
        "areaName": "Modi SquareBuilding",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Pizzas",
          "Pastas",
          "Italian",
          "Fast Food",
          "Snacks",
          "Beverages",
          "Desserts"
        ],
        "avgRating": 4.3,
        "parentId": "11633",
        "avgRatingString": "4.3",
        "totalRatingsString": "1.5K+",
        "sla": {
          "deliveryTime": 32,
          "lastMileTravel": 1.1,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "1.1 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-18 06:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "newg.png",
              "description": "Gourmet"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Gourmet",
                    "imageId": "newg.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹99"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-6c5740f7-aacf-4556-b410-93cd6f3e6273"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/pune/olio-the-wood-fired-pizzeria-emisur-modi-squarebuilding-rest795918",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "23706",
        "name": "McDonald's",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/8706b163-96ee-46b9-9fef-6f2d3c0c81ff_23706.jpg",
        "locality": "Baner",
        "areaName": "Baner",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Burgers",
          "Beverages",
          "Cafe",
          "Desserts"
        ],
        "avgRating": 4.5,
        "parentId": "630",
        "avgRatingString": "4.5",
        "totalRatingsString": "39K+",
        "sla": {
          "deliveryTime": 34,
          "lastMileTravel": 0.7,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "0.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-18 02:45:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹99"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.5",
            "ratingCount": "2.5K+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-6c5740f7-aacf-4556-b410-93cd6f3e6273"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/pune/mcdonalds-baner-rest23706",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "16058",
        "name": "KFC",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/2e29b1ce-455b-4705-8f3d-0b78b994cf0c_16058.JPG",
        "locality": "Baner Road",
        "areaName": "Baner",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Burgers",
          "Rolls & Wraps",
          "Fast Food"
        ],
        "avgRating": 4.3,
        "parentId": "547",
        "avgRatingString": "4.3",
        "totalRatingsString": "19K+",
        "sla": {
          "deliveryTime": 36,
          "lastMileTravel": 1.2,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "1.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-17 23:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-6c5740f7-aacf-4556-b410-93cd6f3e6273"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/pune/kfc-road-baner-rest16058",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "24420",
        "name": "Domino's Pizza",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/7/90e098ca-38cb-4fc8-918c-51ffdef612d2_24420.JPG",
        "locality": "Baner Road",
        "areaName": "Baner",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Pizzas",
          "Italian",
          "Pastas",
          "Desserts"
        ],
        "avgRating": 4.3,
        "parentId": "2456",
        "avgRatingString": "4.3",
        "totalRatingsString": "15K+",
        "sla": {
          "deliveryTime": 25,
          "lastMileTravel": 1.1,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "1.1 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-18 00:59:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹89"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-6c5740f7-aacf-4556-b410-93cd6f3e6273"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/pune/dominos-pizza-road-baner-rest24420",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "13938",
        "name": "Ganesh Bhel Baner",
        "cloudinaryImageId": "ebcc23fff84ec1bd019974b2f164c964",
        "locality": "Baner",
        "areaName": "Baner",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Chaat",
          "Snacks",
          "Fast Food",
          "Street Food"
        ],
        "avgRating": 4.6,
        "parentId": "513785",
        "avgRatingString": "4.6",
        "totalRatingsString": "3.8K+",
        "sla": {
          "deliveryTime": 35,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-17 23:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹69",
          "discountCalloutInfo": {
            "message": "Free Delivery",
            "logoCtx": {
              "logo": "v1655895371/free_delivery_logo_hqipbo.png"
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.0",
            "ratingCount": "<3"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-6c5740f7-aacf-4556-b410-93cd6f3e6273"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/pune/ganesh-bhel-baner-baner-rest13938",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "238146",
        "name": "Theobroma",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/12/b9c6d517-ceab-496f-bffb-6f8852b4a5e3_238146.jpg",
        "locality": "Balewadi",
        "areaName": "Balewadi",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Bakery",
          "Desserts"
        ],
        "avgRating": 4.6,
        "parentId": "1040",
        "avgRatingString": "4.6",
        "totalRatingsString": "7.6K+",
        "sla": {
          "deliveryTime": 22,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-17 23:59:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹99"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.2",
            "ratingCount": "665"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-6c5740f7-aacf-4556-b410-93cd6f3e6273"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/pune/theobroma-balewadi-rest238146",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "2243",
        "name": "Subway",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/21/18625d5b-9dc4-4c27-9bc6-a0329f3f2591_2243.JPG",
        "locality": "Park Grandeur",
        "areaName": "Balewadi",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "sandwich",
          "Salads",
          "wrap",
          "Healthy Food"
        ],
        "avgRating": 4.1,
        "parentId": "2",
        "avgRatingString": "4.1",
        "totalRatingsString": "18K+",
        "sla": {
          "deliveryTime": 32,
          "lastMileTravel": 0.2,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "0.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-17 23:59:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-6c5740f7-aacf-4556-b410-93cd6f3e6273"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/pune/subway-park-grandeur-balewadi-rest2243",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "2057",
        "name": "Eatsome- Wraps & Rolls",
        "cloudinaryImageId": "e56240a4b58956f47a5a1f8392470fbe",
        "locality": "Savta Mali Nagar",
        "areaName": "Baner",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "North Indian",
          "Biryani",
          "Snacks",
          "Street Food",
          "Beverages"
        ],
        "avgRating": 4.3,
        "parentId": "471587",
        "avgRatingString": "4.3",
        "totalRatingsString": "30K+",
        "sla": {
          "deliveryTime": 31,
          "lastMileTravel": 2.3,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "2.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-18 00:30:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-6c5740f7-aacf-4556-b410-93cd6f3e6273"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/pune/eatsome-wraps-and-rolls-savta-mali-nagar-baner-rest2057",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "2053",
        "name": "RushHrs",
        "cloudinaryImageId": "ueiq0zh6dfn38hagze3d",
        "locality": "Baner",
        "areaName": "Baner",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "American",
          "Burgers",
          "Salads",
          "Fast Food",
          "Desserts"
        ],
        "avgRating": 4.5,
        "parentId": "791",
        "avgRatingString": "4.5",
        "totalRatingsString": "25K+",
        "sla": {
          "deliveryTime": 29,
          "lastMileTravel": 2.1,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "2.1 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-18 07:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹149"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "3.9",
            "ratingCount": "334"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-6c5740f7-aacf-4556-b410-93cd6f3e6273"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/pune/rushhrs-baner-rest2053",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "368031",
        "name": "Tossin Pizza",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/3/29/fb5a8127-edc4-4fba-9fda-53c1f964774b_368031.jpg",
        "locality": "Baner",
        "areaName": "Baner",
        "costForTwo": "₹600 for two",
        "cuisines": [
          "Italian"
        ],
        "avgRating": 4.3,
        "parentId": "1778",
        "avgRatingString": "4.3",
        "totalRatingsString": "2.2K+",
        "sla": {
          "deliveryTime": 30,
          "lastMileTravel": 0.4,
          "serviceability": "SERVICEABLE",
          "slaString": "25-35 mins",
          "lastMileTravelString": "0.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-18 05:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "newg.png",
              "description": "Gourmet"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Gourmet",
                    "imageId": "newg.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.3",
            "ratingCount": "352"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-6c5740f7-aacf-4556-b410-93cd6f3e6273"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/pune/tossin-pizza-baner-rest368031",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "762035",
        "name": "Andhra Kodi Pulao",
        "cloudinaryImageId": "af65d7820d53b1fdce6520fed0f1f4fb",
        "locality": "Prime Rose The Mall",
        "areaName": "Baner",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Hyderabadi",
          "South Indian",
          "North Indian",
          "Biryani",
          "Kebabs",
          "Mughlai"
        ],
        "avgRating": 4,
        "parentId": "11064",
        "avgRatingString": "4.0",
        "totalRatingsString": "149",
        "sla": {
          "deliveryTime": 34,
          "lastMileTravel": 2,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "2.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-18 03:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹449",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-6c5740f7-aacf-4556-b410-93cd6f3e6273"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/pune/andhra-kodi-pulao-prime-rose-the-mall-baner-rest762035",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "395305",
        "name": "McDonald's Gourmet Burger Collection",
        "cloudinaryImageId": "cw1kzhlxzsjoxbbcjn0y",
        "locality": "Balewadi High Street",
        "areaName": "Baner",
        "costForTwo": "₹600 for two",
        "cuisines": [
          "Burgers",
          "Beverages",
          "Cafe",
          "Desserts"
        ],
        "avgRating": 4.3,
        "parentId": "10761",
        "avgRatingString": "4.3",
        "totalRatingsString": "390",
        "sla": {
          "deliveryTime": 29,
          "lastMileTravel": 0.7,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "0.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-18 02:45:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-6c5740f7-aacf-4556-b410-93cd6f3e6273"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/pune/mcdonalds-gourmet-burger-collection-balewadi-high-street-baner-rest395305",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "202642",
        "name": "Irani Cafe",
        "cloudinaryImageId": "tfsksql6wnebha3zcttj",
        "locality": "Laxman Nagar",
        "areaName": "Baner",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Bakery",
          "Snacks",
          "Fast Food",
          "Desserts",
          "Beverages",
          "Indian",
          "Street Food"
        ],
        "avgRating": 4.5,
        "parentId": "4057",
        "avgRatingString": "4.5",
        "totalRatingsString": "23K+",
        "sla": {
          "deliveryTime": 26,
          "lastMileTravel": 0.8,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "0.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-17 23:59:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹42"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-6c5740f7-aacf-4556-b410-93cd6f3e6273"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/pune/irani-cafe-laxman-nagar-baner-rest202642",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "615383",
        "name": "Poetry By Love & Cheesecake",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/11/606ed0db-98f7-4d28-8ddb-15278d81317a_615383.jpg",
        "locality": "Balewadi",
        "areaName": "Balewadi",
        "costForTwo": "₹800 for two",
        "cuisines": [
          "Bakery",
          "Desserts",
          "Cafe",
          "Continental",
          "sandwich",
          "Beverages",
          "Coffee"
        ],
        "avgRating": 4.6,
        "parentId": "11330",
        "avgRatingString": "4.6",
        "totalRatingsString": "1.3K+",
        "sla": {
          "deliveryTime": 26,
          "lastMileTravel": 0.7,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "0.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-17 23:59:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "newg.png",
              "description": "Gourmet"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Gourmet",
                    "imageId": "newg.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹100 OFF",
          "subHeader": "ABOVE ₹499",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.3",
            "ratingCount": "437"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-6c5740f7-aacf-4556-b410-93cd6f3e6273"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/pune/poetry-by-love-and-cheesecake-balewadi-rest615383",
        "type": "WEBLINK"
      }
    }
  ];


const RestaurantCard = (props)=>{
    const {resData} = props;
    const {name, cuisines, locality, avgRatingString} = resData?.info;
    return (
        <div className="res-card">
            <img className="res-logo" alt="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.info.cloudinaryImageId}></img>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{locality}</h4>
            <h4>{avgRatingString}</h4>
        </div>
    )
}

const Body = ()=>{
    return (
        <div className="body">
            <div className="search">
                search
            </div>
            <div className="res-container">
                {
                    restList.map(restaurant=><RestaurantCard key={restaurant.info.id} resData={restaurant}></RestaurantCard>)
                }
            </div>
        </div>
    )
}

const AppLayout = ()=>{
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout></AppLayout>)
