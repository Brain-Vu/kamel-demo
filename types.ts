export interface RideReq {
  user_id : number,
  trip_id : number,
  rider_count : number,
  timestamp : string,
  start_coord : Coord,
  end_coord : Coord,
}

interface Coord {
  latitude : number,
  longitude : number
}