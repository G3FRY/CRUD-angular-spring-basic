package com.project.backend.service;

import com.project.backend.model.Employee;

import java.util.*;
public interface EmployeeService {
    Employee saveEmployee(Employee employee);
    List<Employee> getAllEmployees();
    Employee getEmployeeById(Long id);
    Employee updateEmployee(Employee employee, Long id);
    void deleteEmployee(Long id);
}
