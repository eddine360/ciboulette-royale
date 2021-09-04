let url = `https://download.data.grandlyon.com/wfs/rdata`;
url += `?service=wfs`;
url += `&version=2.0.0`;
url += `&request=GetFeature`;
url += `&typename=apd_apidae.apdlieutourisme_latest`;
url += `&srsname=EPSG:4171`;
url += `&outputFormat=application/json; subtype=geojson`;
url += `&count=-1`;
url += `&startIndex=0`;

export const getDetailsForLyon = () => fetch(url).then(res => res.json());
