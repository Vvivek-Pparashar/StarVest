import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
 
let page = 1;
const fetchData = (setItems, items) => {
 axios
   .get(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`)
   .then((res) => {
     setItems([...items, ...res.data]);
     page = page + 1;
   });
};
 
const refresh = (setItems) => {};
 
export default function Infinitescroll() {
 const [items, setItems] = React.useState([]);
 
 React.useEffect(()=>{
   fetchData(setItems,items)
 },[])
 return (
   <InfiniteScroll
     dataLength={items.length} //This is important field to render the next data
     next={() => {
       fetchData(setItems, items);
     }}
     hasMore={true}
     loader={<h4>Loading...</h4>}
     endMessage={
       <p style={{ textAlign: "center" }}>
         <b>Yay! You have seen it all</b>
       </p>
     }
     // below props only if you need pull down functionality
     refreshFunction={refresh}
     pullDownToRefresh
     pullDownToRefreshThreshold={50}
     pullDownToRefreshContent={
       <h3 style={{ textAlign: "center" }}># 8595; Pull down to refresh</h3>
     }
     releaseToRefreshContent={
       <h3 style={{ textAlign: "center" }}># 8593; Release to refresh</h3>
     }
   >
     <div style={{ minHeight: "100vh" }}>
       {items.map((user) => (
         <img src={user.url} height="100px" width="200px" />
       ))}
     </div>
   </InfiniteScroll>
 );
}