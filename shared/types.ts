export interface RideReq {
  user_id : number,
  trip_id : number,
  rider_count : number,
  timestamp : string,
  start_coord : Coord,
  end_coord : Coord,
}

export interface Coord {
  latitude : number,
  longitude : number
}

export interface TrafficData {
  time: string;
  count: number;
}
