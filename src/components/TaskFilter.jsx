
function TaskFilter({ filter, setFilter }) {
  
  return (    
      <div className="filter">
        <button className={filter == 'all' ? 'btn-filter-active' : 'btn-filter'} onClick={() => setFilter('all')} >All</button> | 
        <button className={filter == 'active' ? 'btn-filter-active' : 'btn-filter'} onClick={() => setFilter('active')} >Active</button> | 
        <button className={filter == 'completed' ? 'btn-filter-active' : 'btn-filter'} onClick={() => setFilter('completed')} >Completed</button>
      </div>
  );
}

export default TaskFilter;