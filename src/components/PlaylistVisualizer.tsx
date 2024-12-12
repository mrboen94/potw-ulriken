// import { useMemo } from 'react';
// import { format, startOfWeek, endOfWeek, eachDayOfInterval, getWeek } from 'date-fns';
//
// const PlaylistVisualizer = ({ data }) => {
//
//   const submissionCounts = useMemo(() => {
//     const counts = {};
//     data.forEach(item => {
//       counts[item.submittedBy] = (counts[item.submittedBy] || 0) + 1;
//     });
//     return counts;
//   }, [data]);
//
//   const weeks = useMemo(() => {
//     const startDate = new Date(Math.min(...data.map(item => item.date)));
//     const endDate = new Date(Math.max(...data.map(item => item.date)));
//     const start = startOfWeek(startDate);
//     const end = endOfWeek(endDate);
//
//     const weekData = {};
//     eachDayOfInterval({ start, end }).forEach(day => {
//       const weekStart = format(startOfWeek(day), 'yyyy-MM-dd');
//       weekData[weekStart] = { count: 0, submissions: [] };
//     });
//
//     data.forEach(item => {
//       const weekStart = format(startOfWeek(item.date), 'yyyy-MM-dd');
//       weekData[weekStart].count += 1;
//       weekData[weekStart].submissions.push(item);
//     });
//
//     return Object.entries(weekData).map(([week, data]) => ({
//       week,
//       count: data.count,
//       submissions: data.submissions,
//     }));
//   }, [data]);
//
//   const getColor = count => {
//     if (count === 0) return '#ebedf0';
//     if (count === 1) return '#c6e48b';
//     if (count === 2) return '#7bc96f';
//     if (count === 3) return '#239a3b';
//     return '#196127';
//   };
//   return (
//     <div>
//       <h2>Playlist Submission Counts</h2>
//       <ul>
//         {Object.entries(submissionCounts).map(([name, count]) => (
//           <li key={name}>{name}: {count}</li>
//         ))}
//       </ul>
//
//       <h2>Playlist Submission Heatmap</h2>
//       <div style={{ position: 'relative' }}>
//         <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2px' }}>
//           {weeks.map(({ week, count, submissions }) => (
//             <div
//               key={week}
//               style={{
//                 width: '10px',
//                 height: '10px',
//                 backgroundColor: getColor(count),
//                 cursor: 'pointer',
//               }}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };
//
// export default PlaylistVisualizer;
