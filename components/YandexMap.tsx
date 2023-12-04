import React from "react";
import { WebView } from "react-native-webview";
import { YandexMapProps } from "../api/models";
import { useLocalization } from "../hooks/useLocalization";
import { yMapsAPIKey } from "../api/base";

export const YandexMap: React.FC<YandexMapProps> = ({ points, zoom }) => {
  const { localization } = useLocalization();
  const mapZoom = zoom || "8";

  let zoomAllPoints: string =
    "map.setBounds(map.geoObjects.getBounds(),{checkZoomRange:true, zoomMargin:9});";
  if (!points?.length) {
    return null;
  }

  return (
    <WebView
      style={{ flex: 1 }}
      source={{
        html: `
        <!DOCTYPE html>
        <html xmlns="http://www.w3.org/1999/xhtml">
          <head>
              <style>
                  * {
                      padding: 0;
                      margin: 0;
                  }
              </style>
              <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0">
              <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
              <script src="https://api-maps.yandex.ru/2.1/?apikey=${yMapsAPIKey}&lang=ru_Ru" type="text/javascript">
              </script>
              <script type="text/javascript">

                ymaps.ready(function () {
                  var map = new ymaps.Map('map', {
                      center: [56.474889, 84.9587535],
                      zoom: 8,
                      controls: ['zoomControl']
                  });

                  var marksArray = ${JSON.stringify(points)};
                  var myGeoObjects = [];
                  
                  for (let i = 0; i < marksArray.length; i++) {
                    let markData = marksArray[i];

                    var newMark = new ymaps.GeoObject({
                      geometry: {
                        type: "Point",
                        coordinates: [markData.latitude, markData.longitude]
                      },
                      properties: {}
                }, {
                    preset: 'islands#blueCircleDotIconWithCaption',
                });
                  myGeoObjects[i] = newMark;
                }
                  
                  var myClusterer = new ymaps.Clusterer();
                  myClusterer.add(myGeoObjects);
                  map.geoObjects.add(myClusterer);

                  ${zoomAllPoints}

                });
              </script>
          </head> 
          <body>
            <div id="map" style="width: 100vm; height: 100vh">
              <div style="position: absolute; width: 100%; height: 100%; display: table;">
                <div style="width: auto; height: 100%; text-align: center; display: table-cell; vertical-align: middle;">
                 
                </div>
              </div>
            </div>
          </body>
        </html>
        `,
      }}
    />
  );
};
