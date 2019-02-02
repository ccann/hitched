(ns hitched.travel
  (:require [hitched.common :refer [navbar link]]))

(defn section
  [left-title right-body]
  [:div {:class "row"}
   [:h6 {:class "three columns header"}
    left-title]
   [:div {:class "nine columns"}
    right-body]])

(def nearby
  [:div
   [:h4 {:class "events-header header"} "From Nearby"]
   [:div.spacer]

   ;; -- trains from NYC --
   (section
    "Trains from NYC"
    [:ul
     [:li "Grand Central Terminal > Beacon via "
      (link "Metro North" "http://as0.mta.info/mnr/schedules/sched_form.cfm")
      [:ul
       [:li "Take the Metro North train from Grand Central Terminal to Beacon. The venue
       is a 40 minute drive from the station."]
       [:li "Tickets available at Grand Central or via the MTA app."]]]
     [:li "Grand Central Terminal > Poughkeepsie via Amtrak"
      [:ul
       [:li "Take the Amtrak train from Grand Central Terminal to Poughkeepsie. The venue
       is a 40 minute drive from the station."]
       [:li "Tickets available online via "
        (link "Amtrak's website" "https://tickets.amtrak.com/itd/amtrak")
        "."]]]])

   ;; -- by car --
   (section
    "By Car"
    [:ul
     [:li "From Boston: 4 hour drive"
      [:ul
       [:li (link "Via I-90 and I-87" "https://goo.gl/maps/r1yTeRUJ3KS2")
        "."]
       [:li (link "Via I-90 and I-84" "https://goo.gl/maps/fQRcR44t8RT2")
        "."]]]
     [:li "From Manhattan: 1.5 hour drive "
      (link "via I-87" "https://goo.gl/maps/pZagMSoopv62")
      "."]
     [:li "Taxis"
      [:ul
       [:li "Uber and Lyft do operate in the area but there are limited
          drivers. You’ll likely have better luck in towns or at the train station than
          out at our venue."]
       [:li "There are a number of local taxi companies. We recommend making an
          advance booking to ensure availability."]]]])])


(def afar
  [:div
   [:h4 {:class "events-header header"} "From Afar"]
   [:div.spacer]

   (section
    "New York City airports"
    [:ul
     [:li "The most flight options will be flying into one of the three New York City
     area airports. Unless you’re planning on spending some time in the City, we
     recommend flying into Newark Airport (EWR) as you can avoid driving through
     Manhattan to get upstate."]
     [:li "Once in New York City, see the Trains/Automobile directions to get you the
     rest of the way."]])

   (section
    "Stewart International Airport (SWF)"
    [:ul
     [:li "Only 30 minutes from the venue, flying into this airport will land you right
    in the Hudson Valley. As a smaller airport, flight options may be more limited."]])])


(defn page []
  [:div
   [navbar]
   [:div
    [:h2 {:class "center-text travel-header"} "Travel"]
    [:div.container
     [:hr]
     nearby
     [:hr]
     afar
     [:div {:class "spacer-xl"}]]]])
