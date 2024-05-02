import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
// import patients from "../../lib/data/patients";

function TemperatureChart({ data }) {
  return (
    <>
      <h2 className="text-xl font-semibold mb-2">Health Trends</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          width={400}
          height={200}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pulse rate"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}

export default TemperatureChart;
