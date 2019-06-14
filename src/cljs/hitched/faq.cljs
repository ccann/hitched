(ns hitched.faq
  (:require [hitched.common :refer [link navbar]]))


(def qas
  [["Is transportation to the venue provided?"
    [:span "Yes! The shuttle will depart at " [:span {:class "bold"} "4:00pm"]
     " from the parking lot shared by the two hotels."
     " Return trips will begin at " [:span {:class "bold"} "9:00pm"]
     " and proceed hourly until the last trip at "
     [:span {:class "bold"} "1:00am"] ". There will not be a shuttle to the Brunch on Sunday morning."]]

   ["Are there Ubers and Lyfts available?"
    "Uber and Lyft do operate in the area but there are limited drivers. You’ll likely have better luck in town or at the train station than out at our venue. There are a number of local taxi companies. We recommend making an advance booking to ensure availability."]

   ["What is the parking situation?"
    "There is plenty of parking at the venue. We will be providing a shuttle from the hotels in New Paltz to and from the venue if you would prefer not to drive."]

   ["Are there other wedding events I'm invited to?"
    "Yes! We'll be hosting a welcome gathering on Friday night and a farewell brunch on Sunday morning. See the When + Where page for details."]

   ["Is your wedding indoors or outdoors?"
    "Unless it's raining it will be a mix of both! You may be walking on grass so keep that in mind with your choice of footwear."]

   ["By when do I need to RSVP?"
    "Please RSVP by May 17th. You can RSVP here on our website or by mail with the RSVP card we sent you."]

   ["What if I have more questions?"
    "Please email us at codaline19@gmail.com"]])


(defn qa
  [[q a]]
  [:div [:h5 q] [:p a]])


(defn page []
  [:div
   [navbar]
   [:h2 {:class "center-text travel-header"} "FAQ"]
   [:div.container
    [:hr]
    [:div.row
     [:div (into [:div] (mapv qa qas))]]
    [:div {:class "spacer-xl"}]]])
