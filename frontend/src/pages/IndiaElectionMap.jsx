// ============================================================
// India Election Map — Choropleth with Tooltips & Toggles
// ============================================================
// Uses react-simple-maps with d3-scale for coloring.
// Reads TopoJSON from /india-states.json (district-level, grouped by st_nm).
// ============================================================

import { useState, useCallback, useMemo } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
} from 'react-simple-maps';
import { scaleOrdinal } from 'd3-scale';

const GEO_URL = '/india-states.json';

// --- Mock Election Data ---
const ELECTION_DATA = {
  'Lok Sabha': {
    'Andhra Pradesh': { party: 'TDP', seats: 25, total: 25, color: '#FFD700' },
    'Arunachal Pradesh': { party: 'BJP', seats: 2, total: 2, color: '#FF9933' },
    'Assam': { party: 'BJP', seats: 11, total: 14, color: '#FF9933' },
    'Bihar': { party: 'NDA', seats: 30, total: 40, color: '#FF9933' },
    'Chhattisgarh': { party: 'BJP', seats: 10, total: 11, color: '#FF9933' },
    'Goa': { party: 'BJP', seats: 2, total: 2, color: '#FF9933' },
    'Gujarat': { party: 'BJP', seats: 25, total: 26, color: '#FF9933' },
    'Haryana': { party: 'BJP', seats: 5, total: 10, color: '#FF9933' },
    'Himachal Pradesh': { party: 'BJP', seats: 4, total: 4, color: '#FF9933' },
    'Jharkhand': { party: 'BJP', seats: 8, total: 14, color: '#FF9933' },
    'Karnataka': { party: 'BJP', seats: 17, total: 28, color: '#FF9933' },
    'Kerala': { party: 'UDF', seats: 18, total: 20, color: '#008000' },
    'Madhya Pradesh': { party: 'BJP', seats: 29, total: 29, color: '#FF9933' },
    'Maharashtra': { party: 'NDA', seats: 31, total: 48, color: '#FF9933' },
    'Manipur': { party: 'BJP', seats: 2, total: 2, color: '#FF9933' },
    'Meghalaya': { party: 'INC', seats: 1, total: 2, color: '#19AAED' },
    'Mizoram': { party: 'ZPM', seats: 1, total: 1, color: '#87CEEB' },
    'Nagaland': { party: 'BJP', seats: 1, total: 1, color: '#FF9933' },
    'Odisha': { party: 'BJP', seats: 20, total: 21, color: '#FF9933' },
    'Punjab': { party: 'INC', seats: 7, total: 13, color: '#19AAED' },
    'Rajasthan': { party: 'BJP', seats: 14, total: 25, color: '#FF9933' },
    'Sikkim': { party: 'SKM', seats: 1, total: 1, color: '#FF6347' },
    'Tamil Nadu': { party: 'DMK', seats: 22, total: 39, color: '#FF0000' },
    'Telangana': { party: 'INC', seats: 8, total: 17, color: '#19AAED' },
    'Tripura': { party: 'BJP', seats: 2, total: 2, color: '#FF9933' },
    'Uttar Pradesh': { party: 'BJP', seats: 36, total: 80, color: '#FF9933' },
    'Uttarakhand': { party: 'BJP', seats: 5, total: 5, color: '#FF9933' },
    'West Bengal': { party: 'TMC', seats: 29, total: 42, color: '#00B2A9' },
    'Delhi': { party: 'BJP', seats: 7, total: 7, color: '#FF9933' },
    'Jammu and Kashmir': { party: 'INC', seats: 1, total: 5, color: '#19AAED' },
    'Ladakh': { party: 'IND', seats: 1, total: 1, color: '#808080' },
    'Puducherry': { party: 'INC', seats: 1, total: 1, color: '#19AAED' },
    'Chandigarh': { party: 'BJP', seats: 1, total: 1, color: '#FF9933' },
    'Andaman and Nicobar Islands': { party: 'BJP', seats: 1, total: 1, color: '#FF9933' },
    'Dadra and Nagar Haveli and Daman and Diu': { party: 'BJP', seats: 2, total: 2, color: '#FF9933' },
    'Lakshadweep': { party: 'INC', seats: 1, total: 1, color: '#19AAED' },
  },
  'Rajya Sabha': {
    'Andhra Pradesh': { party: 'TDP', seats: 6, total: 11, color: '#FFD700' },
    'Arunachal Pradesh': { party: 'BJP', seats: 1, total: 1, color: '#FF9933' },
    'Assam': { party: 'BJP', seats: 4, total: 7, color: '#FF9933' },
    'Bihar': { party: 'NDA', seats: 9, total: 16, color: '#FF9933' },
    'Chhattisgarh': { party: 'BJP', seats: 4, total: 5, color: '#FF9933' },
    'Goa': { party: 'BJP', seats: 1, total: 1, color: '#FF9933' },
    'Gujarat': { party: 'BJP', seats: 8, total: 11, color: '#FF9933' },
    'Haryana': { party: 'BJP', seats: 4, total: 5, color: '#FF9933' },
    'Himachal Pradesh': { party: 'INC', seats: 2, total: 3, color: '#19AAED' },
    'Jharkhand': { party: 'JMM', seats: 3, total: 6, color: '#2E8B57' },
    'Karnataka': { party: 'INC', seats: 5, total: 12, color: '#19AAED' },
    'Kerala': { party: 'LDF', seats: 5, total: 9, color: '#FF0000' },
    'Madhya Pradesh': { party: 'BJP', seats: 8, total: 11, color: '#FF9933' },
    'Maharashtra': { party: 'NDA', seats: 8, total: 19, color: '#FF9933' },
    'Manipur': { party: 'BJP', seats: 1, total: 1, color: '#FF9933' },
    'Meghalaya': { party: 'INC', seats: 1, total: 1, color: '#19AAED' },
    'Mizoram': { party: 'ZPM', seats: 1, total: 1, color: '#87CEEB' },
    'Nagaland': { party: 'BJP', seats: 1, total: 1, color: '#FF9933' },
    'Odisha': { party: 'BJD', seats: 6, total: 10, color: '#008000' },
    'Punjab': { party: 'AAP', seats: 5, total: 7, color: '#00BFFF' },
    'Rajasthan': { party: 'BJP', seats: 6, total: 10, color: '#FF9933' },
    'Sikkim': { party: 'SKM', seats: 1, total: 1, color: '#FF6347' },
    'Tamil Nadu': { party: 'DMK', seats: 10, total: 18, color: '#FF0000' },
    'Telangana': { party: 'BRS', seats: 6, total: 7, color: '#FF69B4' },
    'Tripura': { party: 'BJP', seats: 1, total: 1, color: '#FF9933' },
    'Uttar Pradesh': { party: 'BJP', seats: 18, total: 31, color: '#FF9933' },
    'Uttarakhand': { party: 'BJP', seats: 3, total: 3, color: '#FF9933' },
    'West Bengal': { party: 'TMC', seats: 12, total: 16, color: '#00B2A9' },
    'Delhi': { party: 'AAP', seats: 3, total: 3, color: '#00BFFF' },
    'Jammu and Kashmir': { party: 'BJP', seats: 2, total: 4, color: '#FF9933' },
    'Puducherry': { party: 'INC', seats: 1, total: 1, color: '#19AAED' },
  },
};

// Party color scale
const PARTY_COLORS = scaleOrdinal()
  .domain(['BJP', 'NDA', 'INC', 'UDF', 'AAP', 'TMC', 'DMK', 'LDF', 'TDP', 'BRS', 'BJD', 'JMM', 'SKM', 'ZPM', 'IND'])
  .range(['#FF9933', '#FF9933', '#19AAED', '#008000', '#00BFFF', '#00B2A9', '#FF0000', '#FF0000', '#FFD700', '#FF69B4', '#008000', '#2E8B57', '#FF6347', '#87CEEB', '#808080']);

function IndiaElectionMap() {
  const [activeView, setActiveView] = useState('map'); // 'map' | 'cards'
  const [activeChamber, setActiveChamber] = useState('Lok Sabha');
  const [tooltip, setTooltip] = useState({ show: false, x: 0, y: 0, content: null });

  const currentData = ELECTION_DATA[activeChamber] || {};

  // Get unique states for card view
  const stateList = useMemo(() => {
    return Object.entries(currentData)
      .sort((a, b) => a[0].localeCompare(b[0]))
      .map(([state, data]) => ({ state, ...data }));
  }, [currentData]);

  const handleMouseEnter = useCallback(
    (e, geo) => {
      const stateName = geo.properties.st_nm;
      const stateData = currentData[stateName];
      if (!stateData) return;

      // Boundary-aware positioning
      let x = e.clientX + 15;
      const y = e.clientY - 10;

      // STRICT REQUIREMENT: shift tooltip left if near right edge
      if (window.innerWidth - e.clientX < 250) {
        x = e.clientX - 250;
      }

      setTooltip({
        show: true,
        x,
        y,
        content: {
          state: stateName,
          party: stateData.party,
          seats: stateData.seats,
          total: stateData.total,
          color: stateData.color,
        },
      });
    },
    [currentData]
  );

  const handleMouseLeave = useCallback(() => {
    setTooltip({ show: false, x: 0, y: 0, content: null });
  }, []);

  const getStateColor = useCallback(
    (stateName) => {
      const stateData = currentData[stateName];
      if (!stateData) return 'rgba(255, 255, 255, 0.08)';
      return stateData.color || PARTY_COLORS(stateData.party);
    },
    [currentData]
  );

  return (
    <section className="map-page" id="map-page">
      <div className="map-container">
        {/* Page Header */}
        <div className="map-header">
          <h1 className="map-title">India Election Map</h1>
          <p className="map-subtitle">
            Explore election results across states and union territories
          </p>
        </div>

        {/* Toggle Controls */}
        <div className="map-controls">
          <div className="map-toggle-group">
            <button
              className={`map-toggle-btn ${activeView === 'map' ? 'active' : ''}`}
              onClick={() => setActiveView('map')}
              id="map-view-btn"
            >
              🗺️ Map
            </button>
            <button
              className={`map-toggle-btn ${activeView === 'cards' ? 'active' : ''}`}
              onClick={() => setActiveView('cards')}
              id="cards-view-btn"
            >
              📊 Cards
            </button>
          </div>

          <div className="map-toggle-group">
            <button
              className={`map-toggle-btn ${activeChamber === 'Lok Sabha' ? 'active' : ''}`}
              onClick={() => setActiveChamber('Lok Sabha')}
              id="lok-sabha-btn"
            >
              Lok Sabha
            </button>
            <button
              className={`map-toggle-btn ${activeChamber === 'Rajya Sabha' ? 'active' : ''}`}
              onClick={() => setActiveChamber('Rajya Sabha')}
              id="rajya-sabha-btn"
            >
              Rajya Sabha
            </button>
          </div>
        </div>

        {/* Map View */}
        {activeView === 'map' && (
          <div className="map-wrapper">
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{ scale: 1000, center: [78.9629, 22.5937] }}
              width={800}
              height={820}
              style={{ width: '100%', height: 'auto' }}
            >
              <Geographies geography={GEO_URL}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const stateName = geo.properties.st_nm;
                    const fillColor = getStateColor(stateName);

                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill={fillColor}
                        stroke="rgba(255, 255, 255, 0.15)"
                        strokeWidth={0.4}
                        style={{
                          default: { outline: 'none', opacity: 0.85 },
                          hover: { outline: 'none', opacity: 1, filter: 'brightness(1.2)' },
                          pressed: { outline: 'none', opacity: 0.9 },
                        }}
                        onMouseEnter={(e) => handleMouseEnter(e, geo)}
                        onMouseLeave={handleMouseLeave}
                      />
                    );
                  })
                }
              </Geographies>
            </ComposableMap>

            {/* Tooltip */}
            {tooltip.show && tooltip.content && (
              <div
                className="map-tooltip"
                style={{
                  position: 'fixed',
                  left: tooltip.x,
                  top: tooltip.y,
                }}
              >
                <div className="map-tooltip-header">
                  <span
                    className="map-tooltip-dot"
                    style={{ background: tooltip.content.color }}
                  />
                  <span className="map-tooltip-state">{tooltip.content.state}</span>
                </div>
                <div className="map-tooltip-row">
                  <span>Winning Party</span>
                  <strong>{tooltip.content.party}</strong>
                </div>
                <div className="map-tooltip-row">
                  <span>Seats Won</span>
                  <strong>{tooltip.content.seats} / {tooltip.content.total}</strong>
                </div>
              </div>
            )}

            {/* Legend */}
            <div className="map-legend">
              <div className="map-legend-title">Party Colors</div>
              <div className="map-legend-items">
                {[
                  { party: 'BJP/NDA', color: '#FF9933' },
                  { party: 'INC/UDF', color: '#19AAED' },
                  { party: 'TMC', color: '#00B2A9' },
                  { party: 'DMK/LDF', color: '#FF0000' },
                  { party: 'AAP', color: '#00BFFF' },
                  { party: 'TDP', color: '#FFD700' },
                  { party: 'Others', color: '#808080' },
                ].map((item) => (
                  <div className="map-legend-item" key={item.party}>
                    <span
                      className="map-legend-swatch"
                      style={{ background: item.color }}
                    />
                    <span>{item.party}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Cards View */}
        {activeView === 'cards' && (
          <div className="map-cards-grid">
            {stateList.map((item) => (
              <div className="map-state-card" key={item.state}>
                <div className="map-state-card-header">
                  <span
                    className="map-state-card-dot"
                    style={{ background: item.color }}
                  />
                  <span className="map-state-card-name">{item.state}</span>
                </div>
                <div className="map-state-card-party">{item.party}</div>
                <div className="map-state-card-seats">
                  {item.seats} / {item.total} seats
                </div>
                <div className="map-state-card-bar">
                  <div
                    className="map-state-card-bar-fill"
                    style={{
                      width: `${(item.seats / item.total) * 100}%`,
                      background: item.color,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default IndiaElectionMap;
