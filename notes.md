{isLoaded ? (
          <GoogleMap
            mapContainerStyle={{
              width: "100%",
              height: "100%",
            }}
            center={mapCenter}
            zoom={currentLocation ? 10 : 1}
          >
            {/* {currentLocation && (
              <Marker
                position={{
                  lat: currentLocation.lat,
                  lng: currentLocation.lng,
                }}
              />
            )}
            {destinationCoords && <Marker position={destinationCoords} />}
            {directions && <DirectionsRenderer directions={directions} />} */}
            {/* <div className="w-full absolute bottom-0 left-0 right-0 h-40 bg-white text-gray-900"> */}
              {/* bottom sheet */}
              {/* <div className="px-3.5">
                <GooglePlacesAutocomplete
                  selectProps={{
                    value: destination,
                    onChange: setDestination,
                  }}
                  apiKey="AIzaSyClunNzjwiA8DLmqZHOAhKDqyQqB5RFmYw"
                  apiOptions={{
                    language: "en",
                    region: "",
                  }}
                />
              </div> */}
              <StandaloneSearchBox
                onLoad={(ref) => (inputRef.current = ref)}
                onPlacesChanged={handlePlacesChanged}
            >
              <input type="text" placeholder="placeholdere" />
              </StandaloneSearchBox>
            {/* </div> */}
          </GoogleMap>
        ) : (
          <div className="flex items-center justify-center">
            <h2>Cannot Load Google Map due to Network Errors</h2>
          </div>
        )}