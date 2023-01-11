package com.project.backend.service.implementation;

import com.project.backend.exception.ResourceNotFoundException;
import com.project.backend.model.Employee;
import com.project.backend.repository.EmployeeRepository;
import com.project.backend.service.EmployeeService;
import org.springframework.stereotype.Service;

import java.util.*;

import static java.util.Objects.isNull;

@Service
public class EmployeeServiceImplementation implements EmployeeService {

    private EmployeeRepository employeeRepository;

    //@Autowired can be omitted if the class has only one constructor
    public EmployeeServiceImplementation(EmployeeRepository employeeRepository){
        super();
        this.employeeRepository = employeeRepository;
    }

    @Override
    public Employee saveEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    @Override
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    @Override
    public Employee getEmployeeById(Long id) {
        /*Optional<Employee> employee = employeeRepository.findById(id);
        if (employee.isPresent()){
            return employee.get();
        }
        else {
            throw new ResourceNotFoundException("Employee", "Id", id);
        }*/

        // The preceding lines can be replaced using arrow functions
        return employeeRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Employee", "Id", id)
        );
    }

    @Override
    public Employee updateEmployee(Employee employee, Long id) {
        Employee employeeToUpdate = employeeRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Employee", "Id", id)
        );

        employeeToUpdate.setFirstName(employee.getFirstName());
        employeeToUpdate.setLastName(employee.getLastName());
        employeeToUpdate.setEmail(employee.getEmail());

        employeeRepository.save(employeeToUpdate);

        return employeeToUpdate;
    }

    @Override
    public void deleteEmployee(Long id) {
        // Like the update endpoint we need to check first if the employee exists
        Employee existingEmployee = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee", "Id", id)
        );

        employeeRepository.deleteById(id);

    }

}

