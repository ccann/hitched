(ns hitched.travel
  (:require [hitched.common :as com]))

(defn page []
  [:div
   [com/navbar]
   [:div
    [:h2 {:class "center-text travel-header"} "Travel"]
    [:div.container
     [:hr]
     [:h4 {:class "events-header header"} "From Nearby"]
     [:div.spacer]
     [:div {:class "row"}
      [:h6 {:class "three columns header"}
       "Trains from NYC"]
      [:div {:class "nine columns"}
       [:ul
        [:li "Grand Central Terminal > Beacon via "
         [:a {:href "http://as0.mta.info/mnr/schedules/sched_form.cfm"}
          "Metro North"]
         [:ul
          [:li "Take the Metro North train from Grand Central Terminal to Beacon. The venue is a 40 minute drive from the station."]
          [:li "Tickets available at Grand Central or via the MTA app."]]]
        [:li "Grand Central Terminal > Poughkeepsie via Amtrak"
         [:ul
          [:li "Take the Amtrak train from Grand Central Terminal to Poughkeepsie. The venue is a 40 minute drive from the station."]
          [:li "Tickets available online via "
           [:a {:href "https://tickets.amtrak.com/itd/amtrak"}
            "Amtrak's website"]
           "."]]]]]]

     [:div {:class "row"}
      [:h6 {:class "three columns header"}
       "By Car"]
      [:div {:class "nine columns"}
       [:ul
        [:li "From Boston: 4 hour drive"
         [:ul
          [:li [:a {:href "https://goo.gl/maps/r1yTeRUJ3KS2"}
                "Via I-90 and I-87"]
           "."]
          [:li [:a {:href "https://goo.gl/maps/fQRcR44t8RT2"}
                "Via I-90 and I-84"]
           "."]]]
        [:li [:a {:href "https://goo.gl/maps/pZagMSoopv62"}
              "From Manhattan: 1.5 hour drive via I-87"]]
        [:li "Taxis including info about taxi companies, lack of availability of uber and lyft, and making advance taxi bookings"]]]]

     [:hr]
     [:h4 {:class "events-header header"} "From Afar"]
     [:div.spacer]
     [:div {:class "row"}
      [:h6 {:class "three columns header"}
       "New York City airports"]
      [:div {:class "nine columns"}
       [:ul
        [:li "The most flight options will be flying into one of the three New York City area airports. Unless you’re planning on spending some time in the City, we recommend flying into Newark Airport (EWR) as you can avoid driving through Manhattan to get upstate."]
        [:li "Once in New York City, see the Trains/Automobile directions to get you the rest of the way."]]]
      [:div {:class "row"}
       [:h6 {:class "three columns header"}
        "Stewart International Airport (SWF)"]
       [:div {:class "nine columns"}
        [:ul
         [:li "Only 30 minutes from the venue, flying into this airport will land you right in the Hudson Valley. As a smaller airport, flight options may be more limited.
"]]]]]
     [:div {:class "spacer-xl"}]]]])
