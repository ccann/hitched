(ns hitched.event
  (:require [hitched.common :refer [link navbar]]
            [clojure.string :as str]))


(defn img [filename classes]
  [:img {:class (str/join " " (into ["centered-image"] classes))
         :src (str "images/" filename)}])

(defn subheader [text]
  [:h6 {:class "three columns header"}
   (str/upper-case text)])

(def reception
  [:div
   [:div {:class "event-logo"}
    (link (img "monogram.png" ["almost-full-width"]) "http://www.audreysfarmhouse.com/index.html")]
   [:div.row
    [:div {:class "seven columns"}
     (img "audreys.jpg" ["u-full-width" "venue-img"])]
    [:div {:class "five columns ceremony-text"}
     [:p {:class "header center-text ceremony-header"}
      "CEREMONY + RECEPTION"]
     [:p {:class "center-text ceremony-1"}
      "Saturday, June 29th at 5pm"]
     [:p {:class "address-1 center-text"}
      "2187 Bruynswick Road"]
     [:p {:class "address-2 center-text"}
      "Wallkill, New York"]]]])

(def other-events
  [:div
   [:h6 {:class "events-header header"} "Other Events"]

   ;; -- welcome gathering --
   [:div {:class "row"}
    (subheader "welcome gathering")
    [:div {:class "nine columns"}
     [:span "Friday, June 28, 8:00pm at the "
      (link "Gilded Otter Brewing Company" "https://www.gildedotter.com/")
      ", overlooking the Walkill River."]
     [:br]
     (link "3 Main St, New Paltz, NY 12561" "https://goo.gl/maps/oco1ZrkjQdC2")
     [:br]
     [:p "We’d love to welcome you to the Hudson Valley in person. If you’re in town, please stop by for a drink."]]]

   ;; -- farewell brunch --
   [:div {:class "row"}
    (subheader "farewell brunch")
    [:div {:class "nine columns"}
     "Sunday, June 30, 9:30 - 11:30am at "
     (link "Hoot Owl" "https://hootowlrestaurant.com/")
     ", just down the road from Audrey's."
     [:br]
     (link "26 Awosting Rd, Pine Bush, NY 12566" "https://goo.gl/maps/WVfhP9QKoJx")
     [:br]
     "Come by for one last hug before you hit the road."]]])

(defn page []
  [:div
   [navbar]
   [:div.container
    reception
    [:hr]
    other-events
    [:div {:class "spacer-xl"}]]])
