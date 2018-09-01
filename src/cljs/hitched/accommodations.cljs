(ns hitched.accommodations
  (:require [hitched.common :as com]))

(defn page []
  [:div
   [com/navbar]
   [:h2 {:class "center-text travel-header"} "Accommodations"]
   [:div.container
    [:hr]
    [:p "Summer is a very popular time of year in the Hudson Valley (for good
    reason!). We recommend booking accomodations early and taking advantage of flexible
    cancellation policies if necessary."]
    [:hr]
    [:h4 {:class "center-text"} "Hotels"]
    [:p "We’ve blocked rooms at two hotels in New Paltz, a 20 minute drive from Audrey’s
    Farmhouse. These hotels share a parking lot, and transportation to and from these
    hotels will be provided."]
    [:div.spacer]
    [:div {:class "row"}
     [:div {:class "six columns"}
      [:img {:class "u-full-width centered-image hotel-img"
             :src   "images/abv-inn.jpg"}]
      [:div.spacer]
      [:h6 {:class "header center-text"} "AMERICA'S BEST VALUE INN NEW PALTZ ($)"]
      [:p "7 Terwilliger Lane, New Paltz, NY 12561 - (845) 255-8865"]
      [:p "Please book your rooms directly with the front desk by calling (845) 255-8865
      ext. 4 (available 24 hours a day) and use code"
       [:span {:class "mono"} " K192806M "]
       "to access our group
      rate for the Dunn-Rankin/Canning Wedding."]
      [:p "Rooms may be cancelled for a full refund until 6pm on the day of arrival."]
      [:a {:class "button nounderline"
           :href  "https://www.redlion.com/new-paltz"}
       "CHECK IT OUT"]
      [:div.spacer]
      [:div.spacer]]

     [:div {:class "six columns"}
      [:img {:class "u-full-width centered-image hotel-img"
             :src   "images/hampton-inn.jpg"}]
      [:div.spacer]
      [:h6 {:class "header center-text"} "HAMPTON INN NEW PALTZ ($$)"]
      [:p "4 S Putt Corners Road, New Paltz, NY 12561 - (845) 255-4200"]
      [:p "Please use "
       [:a {:href "http://group.hamptoninn.com/DunnRankinCanningWedding"}
        "this link"]
       " or the button below to book your rooms using our group rate. There is a
       two-night minimum for this rate, and rooms must be booked "
       [:span {:class "bold"} "by May 28, 2019"]
       " to receive the discount."]
      [:p "Rooms may be cancelled for a full refund up to 48 hours prior to check-in."]
      [:a {:class "button nounderline"
           :href  "http://hamptoninn3.hilton.com/en/hotels/new-york/hampton-inn-by-hilton-new-paltz-POUNPHX/index.html"}
       "CHECK IT OUT"]
      [:a {:class "button nounderline"
           :href  "http://group.hamptoninn.com/DunnRankinCanningWedding"}
       "BOOK HERE"]
      [:div.spacer]]]

    [:hr]
    [:h4 {:class "center-text"} "Bed and Breakfast + Home Rental/AirBnB"]
    [:div.spacer]

    [:div.row
     [:div {:class "six columns"}
      [:img {:src "images/the-inn-at-kettleboro.jpg"
             :class "u-full-width centered-image"}]
      [:div.spacer]]
     [:div {:class "six columns"}
      [:p "There are many wonderful bed and breakfasts and smaller hotels in the area. Here
    are just a few:"]
      [:ul {:class "indented"}
       [:li [:a {:href "http://www.innattheridge.com/"}
             "The Inn at the Ridge"]
        " - just down the road from the venue"]
       [:li [:a {:href "http://www.kettleboro.com/"}
             "The Inn at Kettleboro"]
        " – 15 minutes from the venue"]
       [:li [:a {:href "https://www.minnewaskalodge.com/"}
             "Minnewaska Lodge"]
        " – 10 minutes from the venue"]]
      [:p [:a {:href "https://www.airbnb.com/s/homes?refinement_paths%5B%5D=%2Fhomes&query=2188%20Bruynswick%20Road%2C%20Wallkill%2C%20NY%2012589&checkin=2019-06-28&checkout=2019-06-30&allow_override%5B%5D=&s_tag=bNhxqjE5"}
           "AirBnB"]
       " and "
       [:a {:href "https://www.vrbo.com/results?petIncluded=false&ssr=true&adultsCount=2&childrenCount=0&adults=2&children=0&infantsCount=0&pets=false&q=2188%20Bruynswick%20Road%2C%20Wallkill%2C%20NY%2012589&from-date=2019-06-28&to-date=2019-06-30"}
        "VRBO/HomeAway"]
       " offer lots of good options as well, especially for groups or those looking for a longer stay."]]]
    [:div.spacer-xl]


    ]])
