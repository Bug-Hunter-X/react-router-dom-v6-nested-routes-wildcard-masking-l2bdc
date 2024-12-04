Instead of using the wildcard route, define each subroute explicitly.  For example:
```jsx
<Route path="/dashboard" element={<Dashboard />} />
<Route path="/dashboard/settings" element={<DashboardSettings />} />
<Route path="/dashboard/:id" element={<DashboardDetails />} />
```
This ensures that each route is correctly matched, parameters are passed correctly, and the expected components are rendered.  Avoid using wildcards unless absolutely necessary, as they can easily lead to unexpected masking behavior in nested route scenarios.