package com.example.job_portal_backend.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.job_portal_backend.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);
}
