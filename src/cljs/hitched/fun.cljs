(ns hitched.fun
  (:require [hitched.common :refer [navbar spacer]]
            [clojure.string :as str]))


(def site-entries
  [["Vassar College"
    "Explore the campus where we first met."
    "images/vassar.jpg"
    "https://www.vassar.edu/"]

   ["Walkway Over the Hudson"
    "The world’s longest elevated pedestrian bridge, this 1.28 mile span will give you
    terrific views of the Hudson River and Valley."
    "images/woth.jpg"
    "https://walkway.org/"]

   ["Kingston, NY"
    "One of many towns in the Hudson Valley worth wandering."
    "images/kingston.jpg"
    "https://www.tripadvisor.com/Attractions-g48003-Activities-Kingston_New_York.html"]])

(def hiking-entries
  [["Wallkill Valley Rail Trail"
    "A 22-mile multi-use trail linking the towns of Wallkill, New Paltz, and
    Kingston. Pick it up wherever it suits you best."
    "images/rail-trail.jpg"
    "https://www.wvrta.org/home/"]

   ["Mohonk Preserve"
    "Hiking, running, climbing, biking, and horseback riding are all options at New
    York’s largest nonprofit nature preserve. Note that there is a per-person visitor’s
    fee."
    "images/mohonk.jpg"
    "http://www.mohonkpreserve.org/"]

   ["Minnewaska State Park"
    "Explore 33 miles of carriage roads and 50 miles of footpaths with this trail map."
    "images/minnewaska.jpg"
    "https://parks.ny.gov/parks/attachments/MinnewaskaMinnewaskaStateParkTrailMap.pdf"]])

(def hiking-blurb
  "Check out this site for many, many more options that you can filter by difficulty and distance: ")

(def hiking-link "https://hikethehudsonvalley.com/search-hikes/")


(def art-entries
  [["DIA: Beacon"
    "A museum of contemporary art, situated on the banks of the Hudson in the town of
    Beacon."
    "images/dia.jpg"
    "https://www.diaart.org/visit/visit/diabeacon-beacon-united-states"]

   ["Storm King Art Center"
    "A 500-acre open-air museum and sculpture park, get your hiking and art fixes at the
    same time"
    "images/stormking.jpg"
    "https://stormking.org/"]

   ["The Frances Lehman Loeb Art Center at Vassar"
    "The gallery at Vassar has a collection ranging from antiquity to present, with
    special exhibitions throughout the year. Check what’s currently on at their website."
    "images/loeb.jpg"
    "https://fllac.vassar.edu/exhibitions/"]])


(def bev-entries
  [["Yard Owl Craft Brewery"
    nil
    "images/yardowl.jpeg"
    "http://www.yardowlcraftbrewery.com/"]

   ["Newburgh Brewing Company"
    nil
    "images/newburgh.jpg"
    "http://newburghbrewing.com/"]

   ["Kettleborough Cider House"
    nil
    "images/kettle.jpg"
    "http://www.kettleboroughciderhouse.com/"]

   ["Brooklyn Cider House"
    nil
    "images/brooklyn.jpg"
    "https://www.brooklynciderhouse.com/orchard/"]

   ["Benmarl Winery"
    nil
    "images/benmarl.jpg"
    "http://benmarl.com/"]

   ["Nostrano Vineyards"
    nil
    "images/nostrano.jpg"
    "https://nostranovineyards.com/"]

   ["Tuthilltown Distillery"
    nil
    "images/tuth.jpg"
    "http://www.tuthilltown.com/"]

   ["Coppersea Distilling"
    nil
    "images/copper.jpg"
    "http://coppersea.com/"]])


(defn three-cols [entries]
  [:div {:class "row"}
   (for [[name text img link] entries]
     [:div {:class "four columns" :key name}

      [:a {:href link :target "_blank"}
       [:img {:class "u-full-width centered-image fun-img"
              :src img}]]
      spacer
      [:div {:class "indented-sm"}
       [:h6 {:class "fun-subheader"} (str/upper-case name)]
       (when text [:p text])]])])


(defn page []
  [:div.main
   [navbar]
   [:h2 {:class "center-text travel-header"} "Things to Do"]
   [:hr]
   [:div {:class "container wider"}

    [:h3 {:class "center-text"} "Sites"]
    spacer
    [three-cols site-entries]
    [:hr]

    [:h3 {:class "center-text"} "Hiking"]
    spacer
    [three-cols hiking-entries]
    [:div.row [:div {:class "twelve columns"}
               [:p hiking-blurb [:a {:href hiking-link} hiking-link]]]]
    [:hr]

    [:h3 {:class "center-text"} "Art"]
    spacer
    [three-cols art-entries]
    [:hr]

    [:h3 {:class "center-text"}
     "Breweries, Cideries, Wineries + Distilleries"]
    spacer
    [three-cols (take 3 bev-entries)]
    [three-cols (take 3 (drop 3 bev-entries))]
    [three-cols (drop 6 bev-entries)]]])
