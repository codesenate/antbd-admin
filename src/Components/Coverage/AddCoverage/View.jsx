//  {/* Display coordinates */}
//       <div style={{ marginTop: 20, paddingBottom: 20 }}>
//         <h3>Saved Polygon Coordinates</h3>
//         {(!Array.isArray(polygons) || polygons.length === 0) && (
//           <p>No polygons drawn yet.</p>
//         )}
//         {Array.isArray(polygons) &&
//           polygons.map((poly, index) => (
//             <div key={index} style={{ marginBottom: 15 }}>
//               <strong>Polygon {index + 1}:</strong>
//               <ul style={{ paddingLeft: 20, marginTop: 5 }}>
//                 {Array.isArray(poly.coordinates) &&
//                   poly.coordinates.map(([lat, lng], idx) => (
//                     <li key={idx}>
//                       Lat: {lat.toFixed(5)}, Lng: {lng.toFixed(5)}
//                     </li>
//                   ))}
//               </ul>
//             </div>
//           ))}
//       </div>
