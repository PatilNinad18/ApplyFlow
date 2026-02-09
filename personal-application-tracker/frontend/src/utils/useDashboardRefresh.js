import { useEffect } from "react";

/**
 * Hook to refetch dashboard data when window regains focus or on interval
 * @param {Function} refetch - callback to refetch data
 * @param {number} intervalSeconds - interval in seconds to refetch (default: 30)
 */
export function useDashboardRefresh(refetch, intervalSeconds = 30) {
  useEffect(() => {
    // Refetch when window comes back into focus
    const handleFocus = () => {
      refetch();
    };

    window.addEventListener("focus", handleFocus);

    // Refetch on interval
    const intervalId = setInterval(refetch, intervalSeconds * 1000);

    return () => {
      window.removeEventListener("focus", handleFocus);
      clearInterval(intervalId);
    };
  }, [refetch, intervalSeconds]);
}

export default useDashboardRefresh;
