export default function WorkInProgress() {
  return (
    <div className="p-5">
      <div className="flex flex-col items-center justify-center rounded border border-slate-100 px-4 py-10 text-lg dark:border-slate-800 lg:text-sm">
        <div className="m-0 p-0 font-sans text-lg font-medium text-slate-900 dark:text-white">
          Work in progress
        </div>
        <div>
          This page is still under construction. Please check back later.
        </div>

        <div className="flex items-center py-3">
          <div className="w-20 flex-1 border-b border-b-slate-100 dark:border-b-slate-800" />
          <div className="px-4">or</div>
          <div className="w-20 flex-1 border-b border-b-slate-100 dark:border-b-slate-800" />
        </div>
        <div className=" mt-4 ">
          <button className="dark:highlight-white/20flex w-full items-center justify-center rounded-lg bg-slate-900 px-6 py-1 font-semibold text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 dark:bg-sky-500 dark:hover:bg-sky-400 sm:w-auto">
            Subscribe to updates
          </button>
        </div>
      </div>
    </div>
  )
}
