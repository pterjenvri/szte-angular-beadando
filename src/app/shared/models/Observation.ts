export interface Observation {
  id ?: string;
  identifier ?: string[];
  basedOn ?: string[];
  partOf ?: string[];
  status : string;
  category ?: string[];
  code : string;
  subject ?: string;
  focus ?: string[];
  encounter ?: string;
  effective ?: Date;
  issued ?: Date;
  performer ?: string[];
  systolicmmHgValue ?: number;
  diastolicmmHgValue ?: number;
  dataAbsentReason ?: string;
  interpretation ?: string[];
  note ?: string[];
  bodySite ?: string;
  method ?: string;
  specimen ?: string;
  device ?: string;
  referenceRange ?: string[];
  hasMember ?: string[];
  derivedFrom ?: string[];
  component ?: string[];
}
