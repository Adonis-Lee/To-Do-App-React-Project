function Stats({ todos }) {
    const completedCount = todos.filter(t => t.completed).length;

    return (
        <div className = "flex gap-4 mb-6">
            <div className = "bg-white px-6 py-2 rounded-xl shadow-sm border border-slate-200 text-center">
                <span className = "text-slate-500 text-[10px] block uppercase font-bold tracking-wider">Total</span>
                <span className = "text-xl font-bold text-slate-800">{todos.length}</span>
            </div>

            <div className ="bg-white px-6 py-2 rounded-xl shadow-sm border border-slate-200 text-center">
                <span className = "text-green-500 text-[10px] block uppercase font-bold tracking-wider">Done!</span>
                <span className = "text-xl font-bold text-green-600">
                        {completedCount}
                </span>
            </div>
        </div>
    );
}

export default Stats;