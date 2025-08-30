import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, CheckCircle, Clock, TrendingUp } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export default function StatsOverview({ reports, isLoading }) {
  const getStats = () => {
    if (isLoading) return { total: 0, new: 0, investigating: 0, resolved: 0 };
    
    return {
      total: reports.length,
      new: reports.filter(r => r.status === "new").length,
      investigating: reports.filter(r => r.status === "investigating").length,
      resolved: reports.filter(r => r.status === "resolved").length
    };
  };

  const stats = getStats();

  const StatCard = ({ title, value, icon: Icon, color, bgColor }) => (
    <Card className="overflow-hidden border-none shadow-md">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">{title}</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">
              {isLoading ? <Skeleton className="h-8 w-16" /> : value}
            </p>
          </div>
          <div className={`${bgColor} p-3 rounded-xl`}>
            <Icon className={`w-6 h-6 ${color}`} />
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard
        title="Total Reports"
        value={stats.total}
        icon={TrendingUp}
        color="text-blue-600"
        bgColor="bg-blue-100"
      />
      <StatCard
        title="New Reports"
        value={stats.new}
        icon={AlertTriangle}
        color="text-orange-600"
        bgColor="bg-orange-100"
      />
      <StatCard
        title="Investigating"
        value={stats.investigating}
        icon={Clock}
        color="text-yellow-600"
        bgColor="bg-yellow-100"
      />
      <StatCard
        title="Resolved"
        value={stats.resolved}
        icon={CheckCircle}
        color="text-green-600"
        bgColor="bg-green-100"
      />
    </div>
  );
}
