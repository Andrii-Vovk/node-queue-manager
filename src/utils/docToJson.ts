import { Document } from "mongoose";

const docToJson = (doc: Document | Document[]) =>
  Array.isArray(doc)
    ? JSON.stringify(doc.map((d) => d.toObject()))
    : JSON.stringify(doc);

export default docToJson;
