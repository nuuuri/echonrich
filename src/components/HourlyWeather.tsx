import { Weather } from '@/types/Weather';
interface HourlyWeatherProps {
  data: Weather;
}

export default function HourlyWeather({ data }: HourlyWeatherProps) {
  return (
    <div className="flex flex-col text-sm">
      <p>{data.fcstTime.replace(/00$/, '시')}</p>
      <p>{data.temp}℃</p>
      <p>{data.condition}</p>
    </div>
  );
}
